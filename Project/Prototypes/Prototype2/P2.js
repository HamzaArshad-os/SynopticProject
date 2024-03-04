import fs from "fs";
import yaml from "js-yaml";
import * as chai from "chai";
import chaiHttp from "chai-http";
import path from "path";

import { fileURLToPath } from "url";
import { dirname, join } from "path";

//const path = require("path");
//import faker from "faker";

//const faker = require("faker");

//faker.use(faker);
chai.use(chaiHttp);
const { assert } = chai;

function readYamlFile(yamlFile) {
  try {
    let fileContents = fs.readFileSync(yamlFile, "utf8");
    let data = yaml.load(fileContents);
    return data;
  } catch (e) {
    console.error(e);
  }
}

function generateMockData(schema) {
  let mockData = {};
  for (const key in schema.properties) {
    const property = schema.properties[key];
    switch (property.type) {
      case "string":
        mockData[key] = faker.random.word();
        break;
      case "number":
        mockData[key] = faker.random.number();
        break;
      case "boolean":
        mockData[key] = faker.random.boolean();
        break;
    }
  }
  return mockData;
}

function generateTestCode(data) {
  let testCode = "";
  for (const endpoint in data.paths) {
    for (const method in data.paths[endpoint]) {
      testCode += `describe('${method.toUpperCase()} ${endpoint}', function() {\n`;
      const responses = data.paths[endpoint][method].responses;
      for (const statusCode in responses) {
        testCode += `  it('should return status ${statusCode}', async function() {\n`;
        let headerData = {};
        let mockData = {};
        if (data.paths[endpoint][method].parameters) {
          const headers = data.paths[endpoint][method].parameters.filter(
            (param) => param.in === "header"
          );
          // Assuming you have a function generateHeaderData to generate header data based on the parameters
          //headerData = generateHeaderData(headers);
        }
        if (data.paths[endpoint][method].requestBody) {
          const schema =
            data.paths[endpoint][method].requestBody.content["application/json"]
              .schema;
          //mockData = generateMockData(schema);
        }
        testCode += `    let response = await chai.request('http://localhost:3333').${method}('${endpoint}').set(${JSON.stringify(
          headerData
        )}).send(${JSON.stringify(mockData)});\n`;
        testCode += `    expect(response).to.have.status(${statusCode});\n`;
        testCode += `  });\n\n`;
      }
      testCode += "});\n";
    }
  }
  return testCode;
}

function writeTestFile(tc) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const path = join(__dirname, "tests.js");

  console.log(`Writing the following test code to ${path}:\n${tc}`);
  fs.writeFileSync(path, tc);
}

function main() {
  const yamlFile = "Project/specificationExamples/exampleYAMLResolved.yaml";
  const data = readYamlFile(yamlFile);
  const testCode = generateTestCode(data);
  writeTestFile(testCode);
  5;
}

main();
