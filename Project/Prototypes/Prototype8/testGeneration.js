import fs from "fs";
import yaml from "js-yaml";
import * as chai from "chai";
import chaiHttp from "chai-http";
import path from "path";

import * as datageneration from "./mockDataGeneration.js";
import * as yamlInteract from "./yamlInteract.js";
import * as fileHandler from "./fileHandling.js";
import $RefParser from "json-schema-ref-parser";

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { writeFileSync, mkdirSync, existsSync, rmdirSync } from 'fs';

chai.use(chaiHttp);
const { assert } = chai;

export const getSectionsIncludingSchemas = (data,endpoint,method,responseType) => {
  let schemasForThisTest = {
    parameters: [],
    requestHeader: [],
    requestBody: [],
    responses: [],
  };

  // Get schemas for parameters
  let parameterSchemas = yamlInteract.getParamtersContentForEndpointMethod(data,
    endpoint,
    method
  );

  if (parameterSchemas.length > 0) {
    schemasForThisTest.parameters.push(...parameterSchemas);
  }

  //Get schemas for Headers
  let headerSchemas = yamlInteract.getHeadersContentForEndpointMethod(
    data,
    endpoint,
    method
  );
  if (headerSchemas.length > 0) {
    schemasForThisTest.requestHeader.push(...headerSchemas);
  }

  // Get schemas for requestBody
  let requestBodySchemas = yamlInteract.getRequestContentForEndpointMethod(
    data,
    endpoint,
    method
  );
  if (requestBodySchemas.length > 0) {
    schemasForThisTest.requestBody.push(...requestBodySchemas);
  }

  // Get schemas for responses
  let responseSchemas = yamlInteract.getResponseContentForEndpointMethod(
    data,
    endpoint,
    method,
    responseType
  );
  if (responseSchemas.length > 0) {
    schemasForThisTest.responses.push(...responseSchemas);
  }

  return schemasForThisTest;
};

export const iterateEndpointListForSchemas = (data, endpointList, url) => {
  let allData = {};

  for (let endpoint in endpointList) {
    for (let method in endpointList[endpoint]) {
      for (let response of endpointList[endpoint][method]) {
        const ContentAndSchemas = getSectionsIncludingSchemas(data, endpoint, method, response);
        console.log(endpoint, method , response)
        const sections = ['parameters', 'requestHeader', 'requestBody', 'responses'];
        //console.log(JSON.stringify(ContentAndSchemas, null, 2));
        sections.forEach(sectionName => {
          const section = ContentAndSchemas[sectionName];
          const { schemas, unusedInfos } = datageneration.generateSchemas(section);
          
         
          //const mockData = datageneration.generateMockData(schemas);
          console.log(JSON.stringify(section, null, 2));

          //allData[sectionName] = {
           // "MockData" : mockData,
          //  "Schemas" : schemas,
          // "unusedInfo" :unusedInfos   
          //};


        });
        //console.log(datageneration.variables.length);
        //datageneration.readVariables();
        //contenttype
        //allData = {}; clear the data 


        //console.log(JSON.stringify(allData, null, 2));
      }
    }
  }
  //console.log("Unique Schemas");
  //for (var i= 0; i<= datageneration.uniqueSchemas.length; i++){
   // console.log(datageneration.uniqueSchemas[i]);
//  }

 // console.log(checkForDuplicates(datageneration.uniqueSchemas));
};

const fileType = 'json';


// Function to generate a random 5 letter string
const generateRandomString = () => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  for (let i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}




export const mockDataGenerationEntry = (count) => {
  datageneration.uniqueSchemas.forEach((schemaString) => {
    let tobeAddedToFileArray = [];
    for (let i = 0; i < count; i++) {
      let jsonObject = JSON.parse(schemaString);
      console.log("Generating mock Datas for:");
      console.log(jsonObject); // Logs the JSON object to the console
      let data = datageneration.generateMockData(jsonObject);
      console.log(JSON.stringify(data, null, 2));
      tobeAddedToFileArray.push(data);
    }
   
  });
}



const checkForDuplicates = (schemas) => {
  // Create a Set from the array of schemas
  const uniqueSchemasSet = new Set(schemas);

  // If the size of the Set is less than the length of the array, there are duplicates
  if (uniqueSchemasSet.size < schemas.length) {
    return 'There are duplicates.';
  } else {
    return 'There are no duplicates.';
  }
};


export const javascriptTestTopOfFile = (data) => {
  let javascripttesTopOfFile = "";
  //javascripttesTopOfFile +=  ` \n`;
  javascripttesTopOfFile += `//Please make sure the correct Libaries are installed\n`;
  javascripttesTopOfFile += `const fs = require("fs");\n`;
  javascripttesTopOfFile += `const chai = require("chai");\n`;
  javascripttesTopOfFile += `const chaiHttp = require("chai-http");\n`;
  javascripttesTopOfFile += `const expect = chai.expect;\n`;
  javascripttesTopOfFile += `chai.use(chaiHttp);\n`;
  javascripttesTopOfFile += `const path = require("path");\n`;
  javascripttesTopOfFile += `const filename = path.basename(__filename);\n`;

  javascriptTestExtraVariables();

  // Extract the server information
  const serverInfo = yamlInteract.getServerInfo(data);

  // Assign the server information to a constant
  for (let i = 0; i < serverInfo.length; i++) {
    javascripttesTopOfFile += `const url = "${serverInfo[0].url}";\n`;
    javascripttesTopOfFile += `const SERVER_${i + 1}_DESCRIPTION = "${
      serverInfo[i].description
    }";\n`;
  }

  return javascripttesTopOfFile;
};

export const javascriptTestExtraVariables = () => {
  try {
    let extraVariables = "";
    datageneration.failedSchemas.forEach((name, index) => {
      extraVariables += `const ${name} = "";\n`;
    });
    //console.log(extraVariables);

    return extraVariables;
  } catch (error) {
    //console.log("Error generating the extra variable");
    console.error(error);
    return null;
  }
};

export const generateJavascriptTest = (data,url,endpoint,method,response) => {
  
  
  //console.log(javascriptTest);
  return javascriptTest;
};
