
//Resolved Only

import fs from "fs";
import yaml from "js-yaml";
import * as chai from "chai";
import chaiHttp from "chai-http";
import path from "path";
import * as statushttp from 'statushttp';
import * as datageneration from "./mockDataProto.js";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import $RefParser from 'json-schema-ref-parser';

chai.use(chaiHttp);
const { assert } = chai;

export const readYamlFile = async (yamlFile) => {
    try {
      let fileContents = fs.readFileSync(yamlFile, "utf8");
      let data = yaml.load(fileContents);
      data = await $RefParser.dereference(data);
      return data;
    } catch (e) {
      console.error(e);
    }
};

export const getResponseInfo = (data, endpoint, method, responseCode, infoType) => {
  
  let info = null;
  if (data.paths[endpoint] && data.paths[endpoint][method] && data.paths[endpoint][method].responses) {
    const response = data.paths[endpoint][method].responses[responseCode];
    if (response && response[infoType]) {
      info = response[infoType];
      console.log(info);
    }
  }
  return info;
}

//Works for resolved , not unresolved . provide only one refrence at a time
export const getRefrencedData = (data, refPath) =>{
  console.log(refPath)
  
  try{
   const parts = refPath.split('/').slice(1); // Removes the inital  the initial '# or other refrence'
   let current = data;
   //console.log(current);
   for (const part of parts) {
     if (current[part]) {
       current = current[part];
       //console.log(current);
     } else {
       throw new Error(`Reference path "${refPath}" not found.`);
     }
   }
   return current;
  }
  catch(error){
   console.log("Qwerty , This may be inline Or Multiple Refrences provided, Please make sure only one refrence is proivided at a time");
   console.error(error.message);
   console.log("Works for resolved, not unresolved.")
   return refPath;
  }
}

// Function to check if a method for a specific endpoint contains any parameters
export const getParametersForEndpoint = (yamlData, endpoint, method)=> {
  let refs = [];
  let inline = [];
  if (yamlData.paths[endpoint] && yamlData.paths[endpoint][method] && yamlData.paths[endpoint][method].parameters) {
    const parameters = Array.isArray(yamlData.paths[endpoint][method].parameters) ? yamlData.paths[endpoint][method].parameters : [yamlData.paths[endpoint][method].parameters];
    parameters.forEach(parameter => {
      if (parameter.$ref) {
        refs.push(parameter.$ref);
      } else {
        inline.push(parameter);
      }
    });
  } else {
    console.log(`No parameters found for endpoint ${endpoint} and method ${method}`);
    return null;
  }
  return { refs, inline };
}
// Function to check if a method for a specific endpoint contains any schemas for a specific response code
export const getSchemasForEndpointMethodResponse = (yamlData, endpoint, method, responseCode) =>{
  let refs = [];
  let inline = [];
  if (yamlData.paths[endpoint] && yamlData.paths[endpoint][method] && yamlData.paths[endpoint][method].responses) {
    const response = yamlData.paths[endpoint][method].responses[responseCode];
    if (response && response.content) {
      for (const [contentType, content] of Object.entries(response.content)) {
        if (content.schema) {
          const schemas = Array.isArray(content.schema) ? content.schema : [content.schema];
          schemas.forEach(schema => {
            if (schema.$ref) {
              refs.push(schema.$ref);
            } else {
              inline.push(schema);
            }
          });
        }
      }
    } else {
      //console.log(`No schemas found for endpoint ${endpoint}, method ${method}, and response code ${responseCode}`);
      return null;
    }
  }
  return { refs, inline };
}

// Function to check if a method for a specific endpoint contains any schemas for the request header or request body
export const getSchemaPathsForRequest = (yamlData, endpoint, method, requestPart)=> {
  let refs = [];
  let inline = [];
  if (yamlData.paths[endpoint] && yamlData.paths[endpoint][method]) {
    const request = yamlData.paths[endpoint][method][requestPart];
    if (request && request.content) {
      for (const [contentType, content] of Object.entries(request.content)) {
        if (content.schema) {
          const schemas = Array.isArray(content.schema) ? content.schema : [content.schema];
          schemas.forEach(schema => {
            if (schema.$ref) {
              refs.push(schema.$ref);
            } else {
              inline.push(schema);
            }
          });
        }
      }
    } else {
      console.log(`No schemas found for endpoint ${endpoint}, method ${method}, and request part ${requestPart}`);
      return null;
    }
  }
  return { refs, inline };
}

export const endpoint_path = 'paths'; // User can change this
export const schema_path = 'components/schemas'; // User can change this
export const parameters_path = 'components/parameters'; // User can change this

export const getEndpointData = (data, endpoint) =>{
  if (data[endpoint_path][endpoint]) {
    return data[endpoint_path][endpoint];
  } else {
    console.log(`Endpoint ${endpoint} not in the provided data.`);
    return null;
  }
}

export const getMethodData = (data, endpoint, method) =>{
  if (data[endpoint_path][endpoint] && data[endpoint_path][endpoint].hasOwnProperty(method)) {
    return data[endpoint_path][endpoint][method];
  } else {
   // console.error(`Endpoint ${endpoint} or method ${method} not found in the provided data.`);
    return null;
  }
}

export const getMethodInformation = (data, endpoint, method, info) => {
  if (data[endpoint_path][endpoint] && data[endpoint_path][endpoint][method] && data[endpoint_path][endpoint][method].hasOwnProperty(info)) {
    return data[endpoint_path][endpoint][method][info];
  } else {
    //console.error(`Endpoint ${endpoint}, method ${method}, or information ${info} not found in the provided data.`);
    return null;
  }
}

export const generateCondensedDataList = (data)  =>{
  let endpointList = {};

  for (let path in data[endpoint_path]) {
      endpointList[path] = {};
      for (let method in data[endpoint_path][path]) {
          endpointList[path][method] = [];
          for (let response in data[endpoint_path][path][method].responses) {
              endpointList[path][method].push(response);
          }
      }
  }

  return endpointList;
}

export const iterateEndpointList = (data,endpointList, url)  =>{
  for (let endpoint in endpointList) {
    for (let method in endpointList[endpoint]) {
      for (let response of endpointList[endpoint][method]) {
        generateJavascriptTest(data, url, endpoint, method, response);
        //return null;
      }
    }
  }
}

export const generateJavascriptTest = (data,url, endpoint, method, response) =>{
  let javascriptTest= "";
  let bodymockData = {};
  
  //let bodymockData = datageneration.generateMockBody(data,endpoint, method, "requestBody");
 


    
    let tags = "no tags";
    let summary =  "no summary";
    let description =  "no description";
    let operationId = "no operationId";
    let requestBody = "no requestBody";
    let responses = "no responses";
    let callbacks = "no callbacks";
    let deprecated = "no deprecated";
    let security = "no security";
    let responseStatusDescription= "no responseStatusDescription";
    let headerMockData = {};  
    //let bodymockData = datageneration.generateMockBody(data,endpoint, method, "requestBody").refs[0];
    //console.log(bodymockData.inline[0]);
    tags = getMethodInformation(data, endpoint, method, 'tags');
    summary = getMethodInformation(data, endpoint, method, 'summary');
    //description = getMethodInformation(data, endpoint, method, 'description').replace(/\n/g, " ");
    operationId = getMethodInformation(data, endpoint, method, 'operationId');
    requestBody = getMethodInformation(data, endpoint, method, 'requestBody');
    responses = getMethodInformation(data, endpoint, method, 'responses');
    callbacks = getMethodInformation(data, endpoint, method, 'callbacks');
    deprecated = getMethodInformation(data, endpoint, method, 'deprecated');
    security = getMethodInformation(data, endpoint, method, 'security');
    responseStatusDescription = getStatusDescription(response)

   // console.log("fgfgggff");
    console.log(requestBody);
   // console.log("fgfgggff");

    if(requestBody != null) {
      bodymockData = datageneration.generateMockBody(data,endpoint, method, "requestBody");
    }
    console.log(bodymockData);

    //console.log("fgfgggff");

    //javascriptTest +=  ` \n`;
    javascriptTest += `describe('${description}', () => {\n`;
    javascriptTest += `  before(() => {\n`;
    javascriptTest += `    console.log("Tags: ${tags}, Summary: ${summary}, Description: ${description}, Operation ID: ${operationId}, Request Body: ${requestBody}, Responses: ${responses}, Callbacks: ${callbacks}, Deprecated: ${deprecated}, Security: ${security}, Response Status Description: ${responseStatusDescription}");\n`;
    javascriptTest += `  });\n`;
    javascriptTest += `  it('should return status ${response} with "${responseStatusDescription}"', () => {\n`;
    javascriptTest += `    return chai\n`;
    javascriptTest += `      .request('${url}')\n`;
    javascriptTest += `      .${method}('${endpoint}')\n`;
    javascriptTest += `      .set(${JSON.stringify(headerMockData)})\n`;
    javascriptTest += `      .send(${JSON.stringify(bodymockData)})\n`;
    javascriptTest += `      .then((res) => {\n`;
    javascriptTest += `        expect(res).to.have.status(${response});\n`;
    javascriptTest += `      })\n`;
    javascriptTest += `      .catch((err) => {\n`;
    javascriptTest += `        throw err;\n`;
    javascriptTest += `      });\n`;
    javascriptTest += `  });\n`;
    javascriptTest += `});\n`;
    javascriptTest += `\n\n`;

    console.log(javascriptTest);
}

//function that takes a status code and returns its description
export const getStatusDescription = (statusCode) => {
  return statushttp.statusDesc[statusCode];
}

async function main() {
  let data ="";
  try {
    const yamlFile = "Project/specificationExamples/tradingviewSpecResolvedOnly.yaml"; 
     data = await readYamlFile(yamlFile);
    //console.log(data);
  } catch (error) {
    console.error(error);o
  }
  const url = "http://localhost:3333";
  const endpointList = generateCondensedDataList(data);
  iterateEndpointList(data, endpointList, url);
}

main();
