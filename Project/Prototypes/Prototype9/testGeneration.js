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



export const iterateEndpointforTestCases = (data) => {
  
  for (let endpoint in data.paths) {
    const endpointData = data.paths[endpoint];
    for (const method in endpointData) {
      console.log(`test case for ${method.toUpperCase()} ${endpoint}`);
      const responses = endpointData[method].responses;
      for (const statusCode in responses) {
        console.log(`Test case for status code ${statusCode}:`);
        console.log(JSON.stringify(responses[statusCode], null, 2));
      }
    } 
  }
};















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
