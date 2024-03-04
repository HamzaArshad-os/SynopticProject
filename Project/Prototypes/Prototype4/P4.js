import fs from "fs";
import yaml from "js-yaml";
import * as chai from "chai";
import chaiHttp from "chai-http";
import path from "path";

import jsf from "json-schema-faker";

//import { datageneration } from "../Prototypes/Prototype3/datageneration.js";

import { fileURLToPath } from "url";
import { dirname, join } from "path";

const readYamlFile = (yamlFile) => {
  try {
    let fileContents = fs.readFileSync(yamlFile, "utf8");
    let data = yaml.load(fileContents);
    return data;
  } catch (e) {
    console.error(e);
  }
};

// Function to generate data for a given component
const generateDataForComponent = (data, componentName, component) => {
  for (let name in component) {
    let schema = component[name];
    let generatedData = generateSchemaObject(data, schema);
    console.log(`Generated data for ${componentName} ${name}: `, generatedData);
  }
};

const generateSchemaObject = (data, schema) => {
  // Generate schema object data for a single schema object
  try {
    //jsf is depereciating
    let generatedData = jsf.generate({ ...data, ...schema });
    return generatedData;
  } catch (e) {
    console.error(e);
  }
};

// Main function to generate mock data
const generateMockData = (data) => {
  // Create a list of components
  const components = ["schemas", "securitySchemes"];

  // Generate data for each component
  components.forEach((componentName) => {
    let component = data.components[componentName];
    generateDataForComponent(data, componentName, component);
  });
};

function main() {
  const yamlFile = "Project/specificationExamples/exampleYAMLUnresolved.yaml";
  const data = readYamlFile(yamlFile);
  //console.log(data);
  const mockData = generateMockData(data);
  // const testCode = generateTestCode(data);
  // writeTestFile(testCode);
}

main();
