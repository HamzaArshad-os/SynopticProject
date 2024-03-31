import fs from "fs";
import yaml from "js-yaml";
import * as chai from "chai";
import chaiHttp from "chai-http";
import path from "path";

import * as datageneration from "./mockDataGeneration.js";
import * as yamlInteract from "./yamlInteract.js";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import $RefParser from "json-schema-ref-parser";

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
        
        sections.forEach(sectionName => {

          const section = ContentAndSchemas[sectionName];
          console.log(JSON.stringify(section, null, 2));
          datageneration.generateSchemas(section);
          


        });
        //console.log(datageneration.variables.length);
        //datageneration.readVariables();
        //contenttype
        //allData = {}; clear the data 
        //console.log(JSON.stringify(allData, null, 2));
      }
    }
  }


};

export const generateMockDataForUniqueSchemas = (count) => {
  // Object to store the mock data for each unique schema
  let mockDataForUniqueSchemas = {};

  // Iterate over each unique schema
  datageneration.uniqueSchemas.forEach((schemaString, index) => {
    // Parse the schema string back into an object
    let schema = JSON.parse(schemaString);

    // Array to store the mock data for the current schema
    let dataForCurrentSchema = [];

    // Generate mock data for the current schema 'count' number of times
    for (let i = 0; i < count; i++) {
      let data = datageneration.generateMockData([schema]);
      console.log("sCHEMA");
      console.log(JSON.stringify(schema, null, 2));
      dataForCurrentSchema.push(data);
      console.log("mOCKdATA");
      console.log(JSON.stringify(data, null, 2));
    }

    // If a title is provided, use it as the key, otherwise use the index
    let key = schema.title ? schema.title : `mockData${index}`;

    // Add the generated data to the mock data object with the key
    mockDataForUniqueSchemas[key] = dataForCurrentSchema;
  });

  return mockDataForUniqueSchemas;
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
