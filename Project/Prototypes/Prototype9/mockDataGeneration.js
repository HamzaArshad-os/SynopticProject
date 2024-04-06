
import * as yamlInteract from "./yamlInteract.js";
import * as fileHandler from "./fileHandling.js";
import { JSONSchemaFaker } from "json-schema-faker";
import Ajv from "ajv";

const ajv = new Ajv();


export let variables = [];
export let uniqueSchemas = [];

//JSONSchemaFaker.define("customDate", () => {
 // return faker.date.recent().toISOString();
//});

JSONSchemaFaker.option({
  useExamplesValue: false,
  failOnInvalidFormat: false, // Don't throw an error if format is invalid
  failOnInvalidTypes: false, // Don't throw an error if type is invalid
  alwaysFakeOptionals: true, //generate schemas for none required aswell
  additionalProperties: false
});

export const updateJSFOptions = (optionsArray) => {
  optionsArray.forEach(option => {
    JSONSchemaFaker.option(option);
  });
};

//usageofJSFOptions:
      //let newOptions = [
       // { useExamplesValue: false },
       // { failOnInvalidFormat: true },
       // { failOnInvalidTypes: true },
       // { alwaysFakeOptionals: false },
      //  { additionalProperties: true }
     // ];
      
      //datageneration.updateJSFOptions(newOptions);

export const validDataTypes = ['string', 'number', 'integer', 'object', 'array', 'boolean', 'null'];
export const validFormats = ['date-time', 'date', 'time', 'email', 'idn-email', 'hostname', 'idn-hostname', 'ipv4', 'ipv6', 'uri', 'uri-reference', 'iri', 'iri-reference', 'uuid', 'uri-template', 'json-pointer', 'relative-json-pointer', 'regex', 'faker', 'chance', 'casual'];
export const additionalSchemaProperties = ['multipleOf', 'exclusiveMinimum', 'exclusiveMaximum', 'pattern', 'maxLength', 'minLength', 'maxItems', 'minItems', 'uniqueItems', 'contains', 'maxProperties', 'minProperties', 'dependencies', 'propertyNames', 'if', 'then', 'else', 'allOf', 'anyOf', 'oneOf', 'not', 'media', 'discriminator', 'readOnly', 'writeOnly'];

export let count = 2;
export let numberofmockDatas = 0;

export const generateMockData = (schema, name, mockType) => {
  let mockData = {};
  let heldMockData = [];
  try {
    for (let i = 0; i < count; i++) {
      // Generate mock data for the current schema
      let data = JSONSchemaFaker.generate(schema);

      // If a title is provided, use it as the key, otherwise use the index
      let key = schema.title ? schema.title : name;

      // Remove additional properties from objects
      if (schema.type === 'object' && schema.properties) {
        Object.keys(data).forEach(prop => {
          if (!schema.properties.hasOwnProperty(prop)) {
            delete data[prop];
          }
        });
      }

      // Remove additional properties from arrays
      if (schema.type === 'array' && schema.items && schema.items.properties) {
        data = data.map(item => {
          const filteredItem = {};
          Object.keys(item).forEach(prop => {
            if (schema.items.properties.hasOwnProperty(prop)) {
              filteredItem[prop] = item[prop];
            }
          });
          return filteredItem;
        });
      }

      // Add the generated data to the mock data object with the key
      mockData[key] = data;
      heldMockData.push(data);
    }
    numberofmockDatas += 1;
    fileHandler.generateMockDataFileInsertContent(heldMockData, name, mockType);
  } catch (error) {
    console.log(
      `json-schema-faker could not generate data for schema: ${JSON.stringify(schema)}`
    );

    console.log("\nEnd \n" + error.message)
  }

  return mockData;
};


export const dupeSchema = (schema) =>{
  return JSON.parse(JSON.stringify(schema));
}

export const  iterateSchema = (schema) =>{
  // Duplicate the schema
  let duplicatedSchema =  dupeSchema(schema)

  // Iterate over each line in the schema
  for (let key in duplicatedSchema) {
      if (duplicatedSchema.hasOwnProperty(key)) {
          // Your code here to handle each line
          console.log(`Key: ${key}, Value: ${duplicatedSchema[key]}`);
      }
  }

  return duplicatedSchema;
}
