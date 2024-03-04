import fs from "fs";
import yaml from "js-yaml";
import { JSONSchemaFaker } from "json-schema-faker";

// Define rules as a global constant
const rules = {
  integer: {
    minimum: 0,
  },
  // Add more rules here
};

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
  try {
    // Add rules to schema
    addRulesToSchema(schema);
    let generatedData = JSONSchemaFaker.generate({ ...data, ...schema });
    return generatedData;
  } catch (e) {
    console.error(e);
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

// Main function to generate mock data
const generateMockData = (data) => {
  const components = ["schemas", "securitySchemes"];
  components.forEach((componentName) => {
    let component = data.components[componentName];
    generateDataForComponent(data, componentName, component);
  });
};

function main() {
  const yamlFile = "Project/specificationExamples/exampleYAMLResolved.yaml";
  const data = readYamlFile(yamlFile);
  const mockData = generateMockData(data);

  //console.log(mockData.SingleArticle.value);
}

main();
