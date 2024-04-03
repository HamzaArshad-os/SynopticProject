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
  fileHandler.createSubDirectories();

    let data ="";
    
   
    //const yamlFile = "Project/specificationExamples/tempResolved.yaml"; 
    //const yamlFile = "Project/specificationExamples/tradingviewSpecResolvedOnly.yaml"; 
    const yamlFile = "Project/specificationExamples/exampleYAMLResolved.yaml"; 
    //const yamlFile = "Project/specificationExamples/exampleFullyResolved1.yaml"; 
    //const yamlFile = "Project/specificationExamples/exampleFullyResolved2.yaml"; 
    //const yamlFile = "Project/specificationExamples/specjsonVersion.json"; 
    //const yamlFile = "Project/specificationExamples/exampleYAMLUnresolved.yaml"; 
    //const yamlFile = "Project/specificationExamples/exampleYAMLResolved2MultiShema.yaml"; 
    
    try {
    
       data = await yamlInteract.readAndPreprocessYamlFile(yamlFile);
      // console.log(JSON.stringify(data, null, 2));
       //yamlInteract.printSchemaToName()
       //console.log(JSON.stringify(yamlInteract.validButNotJSFFriendly, null, 2));
       for (let schema of yamlInteract.allSchemas) {
        console.log(schema);
        }
    } catch (error) {  
      console.error(error);
    }

    //let serverInfo = yamlInteract.getServerInfo(data);  //Do this in final version for testing  do underenath
    //let url = "http://localhost:3333";
   // const condensedList = yamlInteract.generateCondensedDataList(data);
    
    //console.log(JSON.stringify(condensedList, null, 2));
  }
  
  main();
  //Organise generateData into its own file if possible.
  // When it comes ot generating BadMockData no clue
  //How to handle  AnyOf, aLLoF, OneOf, Not  for schemas ?