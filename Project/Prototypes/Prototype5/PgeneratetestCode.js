import fs from "fs";
import yaml from "js-yaml";
import * as chai from "chai";
import chaiHttp from "chai-http";
import path from "path";

import * as datageneration from "./PgenerateMockData.js";

import { fileURLToPath } from "url";
import { dirname, join } from "path";


chai.use(chaiHttp);
const { assert } = chai;

const endpoint_path = 'paths'; // User can change this

const readYamlFile = (yamlFile) => {
  try {
    let fileContents = fs.readFileSync(yamlFile, "utf8");
    let data = yaml.load(fileContents);
    return data;
  } catch (e) {
    console.error(e);
  }
};




const generateTestCode = (data, components) => {
    let testCode = "";
    let url = "http://localhost:3333";
    for (const endpoint in data[endpoint_path]) {
      for (const method in data[endpoint_path][endpoint]) {
        const responses = data[endpoint_path][endpoint][method].responses;
        let description = data[endpoint_path][endpoint][method].description;
  
        description = description.replace(/\n/g, " ").replace(/'/g, "\\'");
        for (const statusCode in responses) {
          testCode += `describe('${description}', function() {\n`;
          testCode += `  it('should return status ${statusCode}', async function() {\n`;
          let headerData = {};
          let mockData = {};
          if (data[endpoint_path][endpoint][method].parameters) {
            const headers = data[endpoint_path][endpoint][method].parameters.filter(
              (param) => param.in === "header"
            );
            headers.forEach((header) => {
              // Assuming you have a function generateHeaderValue to generate header value based on the header details
              headerData[header.name] = generateHeaderValue(header, components);
            });
          }
          if (data[endpoint_path][endpoint][method].requestBody) {
            const schema =
              data[endpoint_path][endpoint][method].requestBody.content["application/json"]
                .schema;
            // Generate mock data for the schema
            mockData = datageneration.generateSchemaObject(data, schema);
          }
          testCode += `    let response = await chai.request('${url}').${method}('${endpoint}').set(${JSON.stringify(
            headerData
          )}).send(${JSON.stringify(mockData)});\n`;
          testCode += `    expect(response).to.have.status(${statusCode});\n`;
          testCode += `  });\n`;
          testCode += "});\n";
        }
      }
    }
    return testCode;
  };  

  

const writeTestFile = (tc) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const path = join(__dirname, "tests.js");

  console.log(`Writing the following test code to ${path}:\n${tc}`);
  fs.writeFileSync(path, tc);
};

function main() {
  const yamlFile = "Project/specificationExamples/exampleYAMLResolved.yaml";
  const data = readYamlFile(yamlFile);
  const mockData = datageneration.generateMockData(data);
  //console.log(mockData)
  const testCode = generateTestCode(data);
  writeTestFile(testCode);
}

main();
