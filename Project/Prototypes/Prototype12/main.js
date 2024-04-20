import fs from "fs";
import yaml from "js-yaml";
import * as chai from "chai";
import chaiHttp from "chai-http";
import path from "path";
import * as yamlInteract from "./yamlInteract.js";
import * as testgenerator from "./testGeneration.js";
import * as datageneration from "./mockDataGeneration.js";
import * as fileHandler from "./fileHandling.js";

export let language = "javascript";

export const setEndPointPath = (newPath) => {
  yamlInteract.endpoint_path = newPath;
};

export const setSchemasPath = (newPath) => {
  yamlInteract.endpoint_path = newPath;
};

async function main() {
  fileHandler.createDirectoriesForOutputs();
  fileHandler.createSubDirectories();

  let data = "";

  //Insert your specification here
  const yamlFile = "Project/specificationExamples/generalSpecification.yaml";
  //const yamlFile = "Project/specificationExamples/tradingviewSpecResolvedOnly.yaml";
  //const yamlFile = "Project/specificationExamples/exampleYAMLResolved.yaml";
  // const yamlFile = "Project/specificationExamples/exampleFullyResolved2.yaml";
  //const yamlFile = "Project/specificationExamples/exampleYAMLUnresolved.yaml";
  //const yamlFile = "Project/specificationExamples/exampleYAMLResolved2MultiShema.yaml";

  //datageneration.count = 2;// Set number of mock data for each schema to be generated

  try {
    console.log(
      "This may take a moment depending on the size of your specification, If nothing happens after 30 SECONDS AN Issue has arised. Please check the generated schemas and mock data in the GeneratedContent folder.Suspect an issue with the schemas not being handled by JSF in the correct manner. Note this tool currently only supports JSON based schemas, mockData and hence filetypes, If your specifciation includes non application/json datatypes it will throw an error This tool will throw an error if your specification holds circular refrences, Currently only handles YAML format specs"
    );
    console.log(
      " Feel free to make modifications to the mockDataGeneration file and its js.options to suit your needs. if you want to generate more or less mock data for each schema, change the count variable in the mockDataGeneration file.  "
    );
    console.log("Has support for both Resolved and Unresolved specifications.  ");

    data = await yamlInteract.readAndPreprocessYamlFile(yamlFile);

    //yamlInteract.printuniqueSchemaGenMockData()
    // yamlInteract.printUniqueHeadersMap();
    //yamlInteract.printUniqueSecurityMap();
    //console.log(yamlInteract.iterateOverMapGetSpecificSection(yamlInteract.uniqueSchemaGenMockData, 'usage'));
    console.log("-----------------------");
    console.log("Completed.. See generated files for Schemas retrived, gneerated mock data, generated bad mock data and test files.");
    console.log(
      "Note that this tool is designed to take information from an openapi specification, and generate Response and Response vlaue based tests.It can only retrive information form the specification. You will still need to make modfications to the test files to ensure they are correct for your use case."
    );
  } catch (error) {
    console.error(error);
  }
}

main();
