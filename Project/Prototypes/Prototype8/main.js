import fs from "fs";
import yaml from "js-yaml";
import * as chai from "chai";
import chaiHttp from "chai-http";
import path from "path";
import * as statushttp from 'statushttp';

import * as yamlInteract from "./yamlInteract.js";
import * as testgenerator from "./testgeneration.js";
import * as fileHandler from "./fileHandling.js";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import $RefParser from 'json-schema-ref-parser';

chai.use(chaiHttp);
const { assert } = chai;

export const setEndPointPath = (newPath) => {  
  yamlInteract.endpoint_path = newPath;
};








async function main() {

  fileHandler.createDirectoriesForOutputs();
  

    let data ="";
    
   
    //const yamlFile = "Project/specificationExamples/tempResolved.yaml"; 
    //const yamlFile = "Project/specificationExamples/tradingviewSpecResolvedOnly.yaml"; 
    const yamlFile = "Project/specificationExamples/exampleYAMLResolved.yaml"; 
    //const yamlFile = "Project/specificationExamples/exampleFullyResolved1.yaml"; 
    //const yamlFile = "Project/specificationExamples/exampleFullyResolved2.yaml"; 
    //const yamlFile = "Project/specificationExamples/specjsonVersion.json"; 
    
    try {
    
       data = await yamlInteract.readYamlFile(yamlFile);
       //console.log("readYamlFile " + JSON.stringify(data, null, 2));
    } catch (error) {  
      console.error(error);
    }

    let serverInfo = yamlInteract.getServerInfo(data);  //Do this in final version for testing  do underenath
    let url = "http://localhost:3333";
    const condensedList = yamlInteract.generateCondensedDataList(data);
    //console.log(condensedList);
    //let a = yamlInteract.getSchemasForResponse(data ,"/accounts/{accountId}/orders", "get" ,200);
    //console.log(JSON.stringify(a, null, 2));
    //testgenerator.iterateEndpointList(data, condensedList,serverInfo[0].url);
    testgenerator.iterateEndpointListForSchemas(data, condensedList, url); 
    //testgenerator.mockDataGenerationEntry(1);
  }
  
  main();
  //Organise generateData into its own file if possible.
  // When it comes ot generating BadMockData no clue
  //How to handle  AnyOf, aLLoF, OneOf, Not  for schemas ?