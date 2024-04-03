import fs from "fs";
import yaml from "js-yaml";
import * as statushttp from 'statushttp';
import * as datageneration from "./mockDataGeneration.js";
import * as fileHandler from "./fileHandling.js";
import $RefParser from 'json-schema-ref-parser';

let schemaCounter = 0;
export let schemaToName = new Map();
export let schemaErrors = [];
export const endpoint_path = 'paths'; // User can change this

let referencedSchemas = new Map();

function preprocessNode(node, path = '', method = '', contentType = '', location = '', schemaName = '') {
  if (typeof node === "object" && node !== null) {
    if (node.type && (node.properties || node.items)) {
      // This looks like a schema
      let error = validateSchema(node);
      if (error) {
        schemaErrors.push({ error, path, method, location });
        return;
      }
      // Generate a name for inline schemas
      if (!schemaName) {
        schemaName = `${path.replace(/\//g, '')}_${method}_${contentType.replace(/\//g, '')}_Schema${schemaCounter++}`;
      }
      let existingSchemaInfo = schemaToName.get(JSON.stringify(node));
      if (existingSchemaInfo) {
        existingSchemaInfo.usage.push({ path, method, contentType, location });
      } else {
        // Create a new info object with additional properties
        let info = { name: schemaName, usage: [{ path, method, contentType, location }] };
        for (let key in node) {
          if (key !== 'type' && key !== 'properties' && key !== 'items') {
            info[key] = node[key];
          }
        }
        schemaToName.set(JSON.stringify(node), info);
        // Generate a new file for the schema
        fileHandler.generateSchemaFileInsertContent(node, schemaName);
      }
    } else {
      // This is not a schema, so recurse into its properties
      for (let key in node) {
        preprocessNode(node[key], path, method, contentType, location);
      }
    }
  } 
}

export const readAndPreprocessYamlFile = async (yamlFile) => {
  let fileContents = fs.readFileSync(yamlFile, "utf8");
  let data = yaml.load(fileContents);
  data = await $RefParser.dereference(data);

  // Process the schemas in the components section first
  if (data.components && data.components.schemas) {
    for (let schemaName in data.components.schemas) {
      preprocessNode(data.components.schemas[schemaName], '', '', '', schemaName, schemaName);
    }
  }

  // Then generate the condensed data list and preprocess the rest of the data
  generateCondensedDataListAndPreprocess(data);

  return data;
}


export const generateCondensedDataListAndPreprocess = (data) => {
  let endpointList = {};

  for (let path in data[endpoint_path]) {
    endpointList[path] = {};
    for (let method in data[endpoint_path][path]) {
      endpointList[path][method] = [];  // Initialize as an array
      // Handle different content types in responses
      for (let response in data[endpoint_path][path][method].responses) {
        if (data[endpoint_path][path][method].responses[response].content) {
          for (let contentType in data[endpoint_path][path][method].responses[response].content) {
            let schemaName = referencedSchemas.get(JSON.stringify(data[endpoint_path][path][method].responses[response].content[contentType].schema));
            preprocessNode(data[endpoint_path][path][method].responses[response].content[contentType].schema, path, method, contentType, 'response', schemaName);
          }
        }
        endpointList[path][method].push(response);
      }
      // Handle different content types in request bodies
      if (data[endpoint_path][path][method].requestBody && data[endpoint_path][path][method].requestBody.content) {
        for (let contentType in data[endpoint_path][path][method].requestBody.content) {
          let schemaName = referencedSchemas.get(JSON.stringify(data[endpoint_path][path][method].requestBody.content[contentType].schema));
          preprocessNode(data[endpoint_path][path][method].requestBody.content[contentType].schema, path, method, contentType, 'requestBody', schemaName);
        }
      }
      // Handle different content types in parameters
      if (data[endpoint_path][path][method].parameters) {
        for (let parameter of data[endpoint_path][path][method].parameters) {
          if (parameter.schema) {
            let schemaName = referencedSchemas.get(JSON.stringify(parameter.schema));
            preprocessNode(parameter.schema, path, method, parameter.in, 'parameter', schemaName);
          }
        }
      }
    }
  }

  return endpointList;
}

function validateSchema(schema) {
  if (!datageneration.validDataTypes.includes(schema.type)) {
    return `Invalid data type: ${schema.type}`;
  }
  if (schema.format && !datageneration.validFormats.includes(schema.format)) {
    return `Invalid format: ${schema.format}`;
  }
  return null;
}  

export const getServerInfo = (data) => {
  let serverInfo = [];
  if (data.servers) {
      for (let server of data.servers) {
          serverInfo.push({
              url: server.url,
              description: server.description
          });
      }
  }
  return serverInfo;
};


export const getStatusDescription = (statusCode) => {
  return statushttp.statusDesc[statusCode];
}

export const printSchemaToName = () =>{
  for (let [schema, info] of schemaToName.entries()) {
    console.log("----------------------------");
    console.log(`Info: ${JSON.stringify(info, null, 2)}`);
    console.log(`Schema: ${JSON.stringify(JSON.parse(schema), null, 2)}`);
  }
}
