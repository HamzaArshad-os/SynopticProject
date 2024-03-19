import fs from "fs";
import yaml from "js-yaml";
import * as chai from "chai";
import chaiHttp from "chai-http";
import path from "path";

import * as datageneration from "./mockDataGeneration.js";
import * as yamlInteract from "./yamlInteract.js";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import $RefParser from 'json-schema-ref-parser';

chai.use(chaiHttp);
const { assert } = chai;






export const iterateEndpointList = (data,endpointList, url)  =>{
    for (let endpoint in endpointList) {
      for (let method in endpointList[endpoint]) {
        for (let response of endpointList[endpoint][method]) {
            //console.log(endpoint , method, response);
            generateJavascriptTest(data, url, endpoint, method, response);
            
        }
      }
    }
}


export const generateJavascriptTest = (data,url, endpoint, method, response) =>{
    let javascriptTest= "";

    let headerMockData = {};
    let bodymockData = {};
    


    let tags =  yamlInteract.getSingleMethodInformation(data, endpoint, method, 'tags') || "no tags";
    let summary = yamlInteract.getSingleMethodInformation(data, endpoint, method, 'summary') || "no summary";
    let description = yamlInteract.getSingleMethodInformation(data, endpoint, method, 'description') || "no description";
    let operationId = yamlInteract.getSingleMethodInformation(data, endpoint, method, 'operationId') || "no operationId";
    let requestBody = yamlInteract.getSingleMethodInformation(data, endpoint, method, 'requestBody') || "no requestBody";
    let responses = yamlInteract.getSingleMethodInformation(data, endpoint, method, 'responses') || "no responses";
    let callbacks = yamlInteract.getSingleMethodInformation(data, endpoint, method, 'callbacks') || "no callbacks";
    let deprecated = yamlInteract.getSingleMethodInformation(data, endpoint, method, 'deprecated') || "no deprecated";
    let security = yamlInteract.getSingleMethodInformation(data, endpoint, method, 'security') || "no security";
    let responseStatusDescription = yamlInteract.getStatusDescription(response); //Use this instead incase if no response desccrtiption in  documentation

        

    

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



