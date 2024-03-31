
//Resolved Only

import fs from "fs";
import yaml from "js-yaml";
import * as chai from "chai";
import chaiHttp from "chai-http";
import path from "path";
import * as statushttp from 'statushttp';
//import * as datageneration from "./mockDataProto.js";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import $RefParser from 'json-schema-ref-parser';

chai.use(chaiHttp);
const { assert } = chai;


export const endpoint_path = 'paths'; // User can change this
export const schema_path = 'components/schemas'; // User can change this , DOnt think need anymore
export const parameters_path = 'components/parameters'; // User can change this DOnt think need anymore


//Works
export const readYamlFile = async (yamlFile) => {
    try {
      let fileContents = fs.readFileSync(yamlFile, "utf8");
      let data = yaml.load(fileContents);
      data = await $RefParser.dereference(data);
      if (!data) {
        throw new Error(`Failed to load data from ${yamlFile}`);
      }
      //data = await $RefParser.dereference(data);
      return data;
    } catch (e) {
      console.error(e);
    }
};


//Works
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


//Works
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

//Not needed for now
export const getSingleEndpointInformation = (data, endpoint, wantedInformation) => {
  if (data[endpoint_path][endpoint]) {
    if (wantedInformation && data[endpoint_path][endpoint][wantedInformation]) {
      return data[endpoint_path][endpoint][wantedInformation];
    }
    return data[endpoint_path][endpoint];
  }
  return null;
};
  
//Used
export const getSingleMethodInformation = (data, endpoint, method, wantedInformation) => {
    if (data[endpoint_path][endpoint] && data[endpoint_path][endpoint][method] && data[endpoint_path][endpoint][method][wantedInformation]) {
      return data[endpoint_path][endpoint][method][wantedInformation];
    }
    return null;
  };

//Used
export const getSingleResponseInformation = (data, endpoint, method, response, wantedInformation) => {
    if (data[endpoint_path][endpoint] && data[endpoint_path][endpoint][method] && data[endpoint_path][endpoint][method]['responses'] && data[endpoint_path][endpoint][method]['responses'][response] && data[endpoint_path][endpoint][method]['responses'][response][wantedInformation]) {
      return data[endpoint_path][endpoint][method]['responses'][response][wantedInformation];
    }
    return null;
  };  


//Used
export const getRequestContentForEndpointMethod = (data, endpoint, method) => { // Will work in getting refrences aswell but will not need to get refrencesn as dile will b derefreecned in readYAMLFile
    let inlineSchemas = [];
    let requestBody = getSingleMethodInformation(data, endpoint, method, 'requestBody');
    if (requestBody && requestBody.content) {
        for (let content of Object.values(requestBody.content)) {
            if (content.schema) {
                inlineSchemas.push(content.schema);
            }
        }
    }
    return inlineSchemas;
};

//Used
export const getResponseContentForEndpointMethod = (data, endpoint, method, response) => { // Will work in getting refrences aswell but will not need to get refrencesn as dile will b derefreecned in readYAMLFile
  let inlineSchemas = [];
  let responses = getSingleResponseInformation(data, endpoint, method, response, 'content');
  if (responses) {
      for (let content of Object.values(responses)) {
          if (content.schema) {
              inlineSchemas.push(content.schema);
          }
      }
  }
  return inlineSchemas;
};

//Used    
export const getParamtersContentForEndpointMethod = (data, endpoint, method) => { // Will work in getting refrences aswell but will not need to get refrencesn as dile will b derefreecned in readYAMLFile
  let inlineSchemas = [];
  let parameters = getSingleMethodInformation(data, endpoint, method, 'parameters');
  if (parameters) {
      for (let parameter of parameters) {
          inlineSchemas.push(parameter);
      }
  }
  return inlineSchemas;
};

//Used
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
  
//function that takes a status code and returns its description
export const getStatusDescription = (statusCode) => {
  return statushttp.statusDesc[statusCode];
}




async function main() {
    let data ="";
   
    //const yamlFile = "Project/specificationExamples/tempResolved.yaml"; 
    //const yamlFile = "Project/specificationExamples/tradingviewSpecResolvedOnly.yaml"; 
    const yamlFile = "Project/specificationExamples/exampleYAMLResolved.yaml"; 
    
    try {
    
       data = await readYamlFile(yamlFile);
       //console.log("readYamlFile " + JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);o
    }


 

    
    

 
  }
  
  //main();

