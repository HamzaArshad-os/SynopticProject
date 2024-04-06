import fs from "fs";
import yaml from "js-yaml";
import * as chai from "chai";
import chaiHttp from "chai-http";
import path from "path";
import * as yamlInteract from "./yamlInteract.js";
import * as testgenerator from "./testGeneration.js";
import * as datageneration from "./mockDataGeneration.js";
import * as fileHandler from "./fileHandling.js";


export const setEndPointPath = (newPath) => {  
  yamlInteract.endpoint_path = newPath;
};

export const setSchemasPath = (newPath) => {  
  yamlInteract.endpoint_path = newPath;
};

async function main() {

  fileHandler.createDirectoriesForOutputs();
  fileHandler.createSubDirectories();

    let data ="";
    
   
    //const yamlFile = "Project/specificationExamples/tempResolved.yaml"; 
    //const yamlFile = "Project/specificationExamples/tradingviewSpecResolvedOnly.yaml"; 
    //const yamlFile = "Project/specificationExamples/exampleYAMLResolved.yaml"; 
    const yamlFile = "Project/specificationExamples/exampleFullyResolved1.yaml"; 
    //const yamlFile = "Project/specificationExamples/exampleFullyResolved2.yaml"; 
    //const yamlFile = "Project/specificationExamples/specjsonVersion.json"; 
    //const yamlFile = "Project/specificationExamples/exampleYAMLUnresolved.yaml"; 
    //const yamlFile = "Project/specificationExamples/exampleYAMLResolved2MultiShema.yaml"; 
    
    try {
    
      data = await yamlInteract.readAndPreprocessYamlFile(yamlFile);
      //yamlInteract.printuniqueSchemaGenMockData();
      //console.log("qwertyuu");
      //console.log(JSON.stringify(data, null, 2));
      
      //console.log("Size of uniqueSchemas: " +yamlInteract.schemaToName.size);
      //console.log("Size of mockData isntances generated: " +datageneration.numberofmockDatas);
      
      
    } catch (error) {  
      console.error(error);
    }

    //let serverInfo = yamlInteract.getServerInfo(data);  //Do this in final version for testing  do underenath
    //let url = "http://localhost:3333";
   // const condensedList = yamlInteract.generateCondensedDataList(data);
  
  
  }
  
  main();


  
