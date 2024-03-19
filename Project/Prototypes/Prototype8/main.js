import fs from "fs";
import yaml from "js-yaml";
import * as chai from "chai";
import chaiHttp from "chai-http";
import path from "path";
import * as statushttp from 'statushttp';

import * as yamlInteract from "./yamlInteract.js";
import * as testgenerator from "./testGeneration.js";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import $RefParser from 'json-schema-ref-parser';

chai.use(chaiHttp);
const { assert } = chai;

export const setEndPointPath = (newPath) => {  
  yamlInteract.endpoint_path = newPath;
};


async function main() {
    let data ="";
    let url = "http://localhost:3333";
   
    //const yamlFile = "Project/specificationExamples/tempResolved.yaml"; 
    //const yamlFile = "Project/specificationExamples/tradingviewSpecResolvedOnly.yaml"; 
     const yamlFile = "Project/specificationExamples/exampleYAMLResolved.yaml"; 
    
    try {
    
       data = await yamlInteract.readYamlFile(yamlFile);
       //console.log("readYamlFile " + JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);o
    }

    const condensedList = yamlInteract.generateCondensedDataList(data);
    //console.log(condensedList);
    testgenerator.iterateEndpointList(data, condensedList,url);
    

   
  


    
  }
  
  main();