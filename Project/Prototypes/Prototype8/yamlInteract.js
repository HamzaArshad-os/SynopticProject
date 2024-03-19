
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



export const readYamlFile = async (yamlFile) => {
    try {
      let fileContents = fs.readFileSync(yamlFile, "utf8");
      let data = yaml.load(fileContents);
      data = await $RefParser.dereference(data);
      if (!data) {
        throw new Error(`Failed to load data from ${yamlFile}`);
      }
      data = await $RefParser.dereference(data);
      return data;
    } catch (e) {
      console.error(e);
    }
};

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

export const getSingleEndpointInformation = (data, endpoint, wantedInformation) => {
    if (data[endpoint_path][endpoint] && data[endpoint_path][endpoint][wantedInformation]) {
      return data[endpoint_path][endpoint][wantedInformation];
    }
    return null;
  };
  
  export const getSingleMethodInformation = (data, endpoint, method, wantedInformation) => {
    if (data[endpoint_path][endpoint] && data[endpoint_path][endpoint][method] && data[endpoint_path][endpoint][method][wantedInformation]) {
      return data[endpoint_path][endpoint][method][wantedInformation];
    }
    return null;
  };
  
  export const getSingleResponseInformation = (data, endpoint, method, response, wantedInformation) => {
    if (data[endpoint_path][endpoint] && data[endpoint_path][endpoint][method] && data[endpoint_path][endpoint][method]['responses'] && data[endpoint_path][endpoint][method]['responses'][response] && data[endpoint_path][endpoint][method]['responses'][response][wantedInformation]) {
      return data[endpoint_path][endpoint][method]['responses'][response][wantedInformation];
    }
    return null;
  };  

  export const getSchemasForEndpointMethod = (data, endpoint, method) => { // Will work in getting refrences aswell but will not need to get refrencesn as dile will b derefreecned in readYAMLFile
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

export const getSchemasForResponse = (data, endpoint, method, response) => { // Will work in getting refrences aswell but will not need to get refrencesn as dile will b derefreecned in readYAMLFile
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

export const getSchemasForParameters = (data, endpoint, method) => { // Will work in getting refrences aswell but will not need to get refrencesn as dile will b derefreecned in readYAMLFile
  let inlineSchemas = [];
  let parameters = getSingleMethodInformation(data, endpoint, method, 'parameters');
  if (parameters) {
      for (let parameter of parameters) {
          inlineSchemas.push(parameter);
      }
  }
  return inlineSchemas;
};



//function that takes a status code and returns its description
export const getStatusDescription = (statusCode) => {
    return statushttp.statusDesc[statusCode];
  }





async function main() {
    let data ="";
   
    const yamlFile = "Project/specificationExamples/tempResolved.yaml"; 
    //const yamlFile = "Project/specificationExamples/tradingviewSpecResolvedOnly.yaml"; 
     //const yamlFile = "Project/specificationExamples/exampleYAMLResolved.yaml"; 
    
    try {
    
       data = await readYamlFile(yamlFile);
       //console.log("readYamlFile " + JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);o
    }


    //SingleFunctionsTesting
    //let endpoint = "/comments/{comment_id}";
    let endpoint = "/users/{userId}";
    let method = "get";
    let requestedInfo = "description";
    let response = "200";

    
    //let a = getSingleMethodInformation(data, endpoint, method, requewwstedInfo) 
    //let a = getSingleEndpointInformation(data, endpoint,  requestedInfo) 
    //let a = getSingleResponseInformation(data, endpoint, method, response, requestedInfo) 
    //console.log(a);
    //console.log(JSON.stringify(a, null, 2));


    //All inline data extraction tests
    //let a = getInlineSchemasForEndpointMethod(data, endpoint, method);
    let a = getSchemasForParameters(data, endpoint, method);
    //let a = getSchemasForResponse(data, endpoint, method, response,200);
    console.log(JSON.stringify(a, null, 2));

    //const condensedList = generateCondensedDataList(data);
    //console.log(condensedList);
   // iterateEndpointList(data, condensedList);
    

   
  


    
  }
  
  //main();