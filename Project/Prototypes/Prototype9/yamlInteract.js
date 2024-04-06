import fs from "fs";
import yaml from "js-yaml";
import * as statushttp from 'statushttp';
import * as datageneration from "./mockDataGeneration.js";
import * as fileHandler from "./fileHandling.js";
import $RefParser from 'json-schema-ref-parser';

let schemaCounter = 0;
export let uniqueSchemaGenMockData = new Map(); //Holds all unique schemas
export let schemaErrors = [];

export const endpoint_path = 'paths'; // User can change this

export let referencedSchemas = new Map();
export let allSchemas = [];



function extractSchemas(node, path = '', method = '', contentType = '', location = '', schemaName = '') {
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
        schemaName = `${path.replace(/\//g, '')}_${method}_Schema${schemaCounter++}`;
      }
      // Create a new info object with additional properties
      let info = { name: schemaName, usage: [{ path: path || `Components.Schemas.${schemaName}`, method, contentType, location: location || `Component.Schemas.${schemaName}` }], schema: node };
      // Add the schema to the allSchemas array
      allSchemas.push(info);
      // Check if the schema already exists in the map
      let existingSchemaInfo = uniqueSchemaGenMockData.get(JSON.stringify(node));
      if (!existingSchemaInfo) {
        // Add the schema to the map
        uniqueSchemaGenMockData.set(JSON.stringify(node), info);
        // Generate a new file for the schema
        fileHandler.generateSchemaFileInsertContent(node, schemaName);
        let generatedGoodMockDataForSchema = datageneration.generateMockData(node , info.name, "goodMockData"); 
        let generatedBadDataForSchema = datageneration.generateMockData(node , info.name, "badMockData"); 
        // Add the generated mock data to the map
        uniqueSchemaGenMockData.get(JSON.stringify(node)).goodMockData = generatedGoodMockDataForSchema;
        uniqueSchemaGenMockData.get(JSON.stringify(node)).badMockData = generatedBadDataForSchema;
      } else {
        // If the schema already exists in the map, add the new usage info to the existing schema info
        existingSchemaInfo.usage.push({ path: path || `Components.Schemas.${schemaName}`, method, contentType, location: location || `Component.Schemas.${schemaName}` });
      }
    } else {
      // This is not a schema, so recurse into its properties
      for (let key in node) {
        extractSchemas(node[key], path, method, contentType, location);
      }
    }
  } 
}






export const readAndPreprocessYamlFile = async (yamlFile) => {
  let fileContents = fs.readFileSync(yamlFile, "utf8");
  let data = yaml.load(fileContents);
  data = await $RefParser.dereference(data);

  // Process all subsections of schemas in the components section
  if (data.components) {
    for (let componentType in data.components) {
      for (let schemaName in data.components[componentType]) {
        extractSchemas(data.components[componentType][schemaName], '', '', '', schemaName, schemaName);
      }
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
            let schemaName = response.name; // Use the response name as the schema name
            //console.log("edgbgb response");
      //console.log(schemaName);
            extractSchemas(data[endpoint_path][path][method].responses[response].content[contentType].schema, path, method, contentType, 'response', schemaName);
          }
        }
        endpointList[path][method].push(response);
      }

      // Handle different content types in request header
      if (data[endpoint_path][path][method].parameters) {
        for (let header of data[endpoint_path][path][method].parameters) {
          if (header.in === 'header' && header.schema) {
            let schemaName = header.name; // Use the header's name as the schema name
           // console.log("edgbgb header");
           // console.log(schemaName);
            extractSchemas(header.schema, path, method, header.in, 'header', schemaName);
          }
        }
      }

      // Handle different content types in request bodies
      if (data[endpoint_path][path][method].requestBody && data[endpoint_path][path][method].requestBody.content) {
        for (let contentType in data[endpoint_path][path][method].requestBody.content) {
          let schemaName = data[endpoint_path][path][method].requestBody.name; // Use the requestBody name as the schema name
         // console.log("edgbgb  body");
         // console.log(schemaName);
          extractSchemas(data[endpoint_path][path][method].requestBody.content[contentType].schema, path, method, contentType, 'requestBody', schemaName);
        }
      }

      // Handle different content types in parameters
      if (data[endpoint_path][path][method].parameters) {
        for (let parameter of data[endpoint_path][path][method].parameters) {
          if (parameter.schema) {
            let schemaName = parameter.name; // Use the parameter's name as the schema name
           // console.log("edgbgb param");
     // console.log(schemaName);
            extractSchemas(parameter.schema, path, method, parameter.in, 'parameter', schemaName);
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

export const printuniqueSchemaGenMockData = () =>{
  for (let [schema, info] of uniqueSchemaGenMockData.entries()) {
    console.log("");
    console.log(`Info: ${JSON.stringify(info, null, 2)}`);
    console.log(`Schema: ${JSON.stringify(JSON.parse(schema), null, 2)}`);
  }
}

//Needs testing for getting secuirtySchemas
export const getHeadersContentForEndpointMethod = (data, endpoint, method) => {
  let headers = [];

  // Check for global headers
  if (data.components && data.components.parameters) {
    for (let param of Object.values(data.components.parameters)) {
      if (param.in === 'header') {
        headers.push(param);
      }
    }
  }

  // Check for path-level headers
  if (data.paths[endpoint].parameters) {
    for (let param of data.paths[endpoint].parameters) {
      if (param.in === 'header') {
        headers.push(param);
      }
    }
  }

  // Check for operation-level headers
  if (data.paths[endpoint][method].parameters) {
    for (let param of data.paths[endpoint][method].parameters) {
      if (param.in === 'header') {
        headers.push(param);
      }
    }
  }

  // Check for response headers
  if (data.paths[endpoint][method].responses) {
    for (let response of Object.values(data.paths[endpoint][method].responses)) {
      if (response.headers) {
        for (let header of Object.values(response.headers)) {
          headers.push(header);
        }
      }
    }
  }

  // Check for security headers
  if (data.components && data.components.securitySchemes) {
    for (let scheme of Object.values(data.components.securitySchemes)) {
      if (scheme.in === 'header') {
        headers.push(scheme);
      }
    }
  }

  return headers;
};

