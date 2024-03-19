import fs from "fs";
import yaml from "js-yaml";
import { JSONSchemaFaker } from "json-schema-faker";

// Define rules as a global constant
export const rules = {
    integer: {
      minimum: 0,
    },
    array: {
      minLength: 4,
      maxLength: 4,
    },
    string: {
      minLength: 4,
      maxLength: 30,
    },
  };
  
  // Define formatRules as a global constant
  export const formatRules = {
    //date: true, // Dates do not follow the rules
    //email: true, // Emails follow the rules
    // Add more formats here
  };


  
  // Function to add rules to schema
  export const addRulesToSchema = (schema) => {
    for (let key in schema) {
      if (typeof schema[key] === "object") {
        addRulesToSchema(schema[key]);
      } else if (key === "type" && rules[schema[key]]) {
        // Check if the format is specified and it should not follow the rules
        if (schema['format'] && formatRules[schema['format']] === false) {
          continue;
        }
        Object.assign(schema, rules[schema[key]]);
      }
    }
  };


  

// Define schemaPath as a global variable
export let schemaPath = "components";

// Define error list
export let errorList = [];

export const readYamlFile = (yamlFile) => {
  try {
    let fileContents = fs.readFileSync(yamlFile, "utf8");
    let data = yaml.load(fileContents);
    return data;
  } catch (e) {
    //console.error(e);
    errorList.push(e);
  }
};


// Function to extract all unique formats from a schema
export const extractFormats = (schema, formats = new Set()) => {
  for (let key in schema) {
    if (typeof schema[key] === "object") {
      extractFormats(schema[key], formats);
    } else if (key === "format") {
      formats.add(schema[key]);
    }
  }
  return formats;
};

export const generateSchemaObject = (data, schema) => {
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



// Function to generate data for a given component
export const generateDataForComponent = (data, componentName, component) => {
  let componentData = {};
  for (let name in component) {
    let schema = component[name];
    let generatedData = generateSchemaObject(data, schema);
    componentData[name] = generatedData;
  }
  return componentData;
};

// Main function to generate mock data
export const generateMockData = (data) => {
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

// Define parametersPath as a global variable
export let parametersPath = "components"; 

// Function to get all available parameters
export const getParameters = (data) => {
  const parameters = Object.keys(data[parametersPath]);
  return parameters;
};


function main() {
  const yamlFile = "Project/specificationExamples/exampleYAMLResolved.yaml";
  const data = readYamlFile(yamlFile);
  //const mockData = generateMockData(data);
  console.log("Parmas");
  

  const parameters = getParameters(data);
  console.log(parameters);
  //console.log(mockData);  
  //console.log(mockData.schemas.User);

  //console.log(mockData.schemas.SingleArticle);

  //console.log("Errors:", errorList);

  //const formats = extractFormats(data);
  //console.log("All unique formats that are avaaible to edit in formatRules:", Array.from(formats));
}

main();




