import fs from "fs";
import yaml from "js-yaml";
import { JSONSchemaFaker } from "json-schema-faker";

// Define rules as a global constant, have this empty as defualt
const rules = {
  integer: {
    minimum: 0,
  },
  array: {
    minLength: 4,
    maxLength: 4,
  },
  string: {
    minLength: 4,
    maxLength: 5,
  },

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
    //console.error(e);
    errorList.push(e);
  }
};

const generateSchemaObject = (data, schema) => {
  try {
    // Add rules to schema
    addRulesToSchema(schema);
    let generatedData = JSONSchemaFaker.generate({ ...data, ...schema });
    return generatedData;
  } catch (e) {
    //console.error(e);
    errorList.push(e);
  }
};

// Function to add rules to schema
const addRulesToSchema = (schema) => {
  for (let key in schema) {
    if (typeof schema[key] === "object") {
      addRulesToSchema(schema[key]);
    } else if (key === "type" && rules[schema[key]]) {
      // Check if the format is date, if so, skip applying the string size rules
      if (schema['format'] && schema['format'] === 'date') {
        continue;
      }
      Object.assign(schema, rules[schema[key]]);
    }
  }
};

// Function to generate data for a given component
const generateDataForComponent = (data, componentName, component) => {
  let componentData = {};
  for (let name in component) {
    let schema = component[name];
    let generatedData = generateSchemaObject(data, schema);
    componentData[name] = generatedData;
  }
  return componentData;
};

// Main function to generate mock data
const generateMockData = (data) => {
  const components = Object.keys(data[schemaPath]);
  let mockData = {};
  components.forEach((componentName) => {
    let component = data[schemaPath][componentName];
    mockData[componentName] = generateDataForComponent(
      data,
      componentName,
      component
    );
  });
  return mockData;
};

function main() {
  const yamlFile = "Project/specificationExamples/exampleYAMLResolved2.yaml";
  const data = readYamlFile(yamlFile);
  const mockData = generateMockData(data);
  console.log(mockData);
  //console.log(mockData.schemas.User);

  //console.log(mockData.SingleArticle.value);

  //console.log("Errors:", errorList);
}

main();
