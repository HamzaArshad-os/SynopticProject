import fs from "fs";
import yaml from "js-yaml";
import * as chai from "chai";
import chaiHttp from "chai-http";
import path from "path";

import { datageneration } from "../Prototypes/Prototype3/datageneration.js";

import { fileURLToPath } from "url";
import { dirname, join } from "path";

//const path = require("path");
//import faker from "faker";

//const faker = require("faker");

//faker.use(faker);
chai.use(chaiHttp);
const { assert } = chai;

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
  for (const endpoint in data.paths) {
    for (const method in data.paths[endpoint]) {
      const responses = data.paths[endpoint][method].responses;
      let description = data.paths[endpoint][method].description;

      description = description.replace(/\n/g, " ").replace(/'/g, "\\'");
      for (const statusCode in responses) {
        testCode += `describe('${description}', function() {\n`;
        testCode += `  it('should return status ${statusCode}', async function() {\n`;
        let headerData = {};
        let mockData = {};
        if (data.paths[endpoint][method].parameters) {
          const headers = data.paths[endpoint][method].parameters.filter(
            (param) => param.in === "header"
          );
          headers.forEach((header) => {
            // Assuming you have a function generateHeaderValue to generate header value based on the header details
            headerData[header.name] = generateHeaderValue(header, components);
          });
        }
        if (data.paths[endpoint][method].requestBody) {
          const schema =
            data.paths[endpoint][method].requestBody.content["application/json"]
              .schema;
          mockData = datageneration.generateMockData(schema);
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
  const testCode = generateTestCode(data);
  writeTestFile(testCode);
}

main();
