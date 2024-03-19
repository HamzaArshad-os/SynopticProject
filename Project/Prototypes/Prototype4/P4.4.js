import fs from "fs";
import yaml from "js-yaml";
import { JSONSchemaFaker } from "json-schema-faker";

// Define rules as a global constant

const rules = {
  integer: {  //Rules are not being followed
    minimum: 0,
    maximum: 100,
  },
  string: {
    minLength: 0,
    maxLength: 30,
  },
  array: {
    minLength: 4,
    maxLength: 4,
  }
  // Add more rules here
};

// Define schemaPath as a global variable
let schemaPath = "components";

// Define error list
let errorList = [];

const readYamlFile = (yamlFile) => {
  try {
    let fileContents = fs.readFileSync(yamlFile, "utf8");
    let data = yaml.load(fileContents);
    return data;
  } catch (e) {
    errorList.push(e);
  }
};

const generateSchemaObject = (data, schema, ignoreRules = false) => {
  try {
    // Add rules to schema if not ignoring rules
    if (!ignoreRules) {
      addRulesToSchema(schema);
    }
    let generatedData = JSONSchemaFaker.generate({ ...data, ...schema });
    return generatedData;
  } catch (e) {
    errorList.push(e);
  }
};

// Function to add rules to schema
const addRulesToSchema = (schema) => {
  for (let key in schema) {
    if (typeof schema[key] === "object") {
      addRulesToSchema(schema[key]);
    } else if (key === "type" && rules[schema[key]]) {
      Object.assign(schema, rules[schema[key]]);
    }
  }
};

// Function to generate data for a given component
const generateDataForComponent = (
  data,
  componentName,
  component,
  ignoreRules = false
) => {
  let componentData = {};
  for (let name in component) {
    let schema = component[name];
    let generatedData = generateSchemaObject(data, schema, ignoreRules);
    componentData[name] = generatedData;
  }
  return componentData;
};

// Main function to generate mock data
const generateMockData = (data, ignoreRules = false) => {
  const components = Object.keys(data[schemaPath]);
  let mockData = {};
  components.forEach((componentName) => {
    let component = data[schemaPath][componentName];
    mockData[componentName] = generateDataForComponent(
      data,
      componentName,
      component,
      ignoreRules
    );   
  });
  return mockData;
};

//Fix the fact that ther rules stuff does not work and also set  me so if string min causes for a date to not be generated,m ity should override the rule to generate dates

function main() {
  const yamlFile = "Project/specificationExamples/exampleYAMLResolved.yaml";
  const data = readYamlFile(yamlFile);
  const mockDataWithRules = generateMockData(data, false);
  const mockDataWithoutRules = generateMockData(data, true);
  console.log("Mock data with rules:", mockDataWithRules);
  //console.log("Mock data without rules:", mockDataWithoutRules);
  //console.log(mockDataWithoutRules.schemas.Users);


  //console.log("Errors:", errorList);
}

main();
