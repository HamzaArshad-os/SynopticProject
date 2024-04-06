
import * as yamlInteract from "./yamlInteract.js";
import * as fileHandler from "./fileHandling.js";
import { JSONSchemaFaker } from "json-schema-faker";
import Ajv from "ajv";

const ajv = new Ajv();


export let variables = [];
export let uniqueSchemas = [];

export let shouldLog = true; // Set this to false to disable logging

export function readVariables() {
  variables.forEach((variable, index) => {
    console.log(`Variable ${index + 1}:`, JSON.stringify(variable , null, 2));
  });
}

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










export const generateSchema = (section) => {
  let schema = {};
  let unusedInfo = {};

  // Handle the type property
  let type = section.schema ? section.schema.type : section.type;
  if (type && validDataTypes.includes(type)) {
    schema.type = type;
  } else {
    // If the type is not valid, add the section to variables
    if (!variables.some(variable => JSON.stringify(variable) === JSON.stringify(section))) {
      variables.push(section);
    }
    return null;
  }

  // Handle the minimum and maximum properties
  if (section.minimum !== undefined) {
    schema.minimum = section.minimum;
  } else if (section.minimum) {
    unusedInfo.minimum = section.minimum;
  }
  if (section.maximum !== undefined) {
    schema.maximum = section.maximum;
  } else if (section.maximum) {
    unusedInfo.maximum = section.maximum;
  }

  // Handle the enum and const properties
  if (section.enum) {
    schema.enum = section.enum;
  } else if (section.enum) {
    unusedInfo.enum = section.enum;
  }
  if (section.const !== undefined) {
    schema.const = section.const;
  } else if (section.const) {
    unusedInfo.const = section.const;
  }

  // Handle the default property
  if (section.default) {
    schema.default = section.default;
  } else if (section.default) {
    unusedInfo.default = section.default;
  }

   // Handle the items property
   if (section.items || (section.schema && section.schema.items)) {
    let items = section.schema ? section.schema.items : section.items;
    let { schema: itemsSchema, unusedInfo: itemsUnusedInfo } = generateSchema(items);
    schema.items = itemsSchema;
    unusedInfo.items = itemsUnusedInfo;
  }

    // Handle the properties property
    if (section.properties) {
      let { schema: propertiesSchema, unusedInfo: propertiesUnusedInfo } = generatePropertiesSchema(section.properties);
      schema.properties = propertiesSchema;
      unusedInfo.properties = propertiesUnusedInfo;
    }
  
    // Handle the additionalProperties property
    if (section.additionalProperties !== undefined) {
      if (section.additionalProperties === false) {
        // Handle empty objects
        schema.additionalProperties = false;
      } else {
        let { schema: additionalPropertiesSchema } = generateSchema(section.additionalProperties);
        schema.additionalProperties = additionalPropertiesSchema;
      }
    } else {
      // If additionalProperties is not defined, set it to false
      schema.additionalProperties = false;
    }

  // Handle the patternProperties property
  if (section.patternProperties) {
    schema.patternProperties = {};
    for (let pattern in section.patternProperties) {
      let { schema: patternPropertiesSchema } = generateSchema(section.patternProperties[pattern]);
      schema.patternProperties[pattern] = patternPropertiesSchema;
    }
  }

  // Handle the format property
  if (section.format && validFormats.includes(section.format)) {
    schema.format = section.format;
  } else if (section.format) {
    unusedInfo.format = section.format;
  }

  // Handle the readOnly property
  if (section.readOnly !== undefined) {
    schema.readOnly = section.readOnly;
  } else if (section.readOnly) {
    unusedInfo.readOnly = section.readOnly;
  }

  // Handle the name property
  if (section.name) {
    schema.title = section.name;
  } else if (section.name) {
    unusedInfo.name = section.name;
  }

  // Handle the description property
  if (section.description) {
    schema.description = section.description;
  } else if (section.description) {
    unusedInfo.description = section.description;
  }

  // Handle the required property
  if (section.required !== undefined) {
    schema.required = section.required;
  } else if (section.required) {
    unusedInfo.required = section.required;
  }

  // Handle additional schema properties
  additionalSchemaProperties.forEach(prop => {
    if (section[prop] !== undefined) {
      schema[prop] = section[prop];
    } else if (section[prop]) {
      unusedInfo[prop] = section[prop];
    }
  });

  // Handle conditional schemas
  if (section.if) {
    schema.if = generateSchema(section.if);
    if (section.then) {
      schema.then = generateSchema(section.then);
    }
    if (section.else) {
      schema.else = generateSchema(section.else);
    }
  }

  // Handle media types
  if (section.media) {
    schema.media = section.media;
  }

  // Handle discriminator object
  if (section.discriminator) {
    schema.discriminator = section.discriminator;
  }

  // Handle read-only and write-only properties
  if (section.readOnly !== undefined) {
    schema.readOnly = section.readOnly;
  }
  if (section.writeOnly !== undefined) {
    schema.writeOnly = section.writeOnly;
  }

  return { schema, unusedInfo };
}

// Function to generate a schema for each property in a properties object
function generatePropertiesSchema(properties) {
  let schemaProperties = {};
  let unusedInfoProperties = {};
  for (let propName in properties) {
    let { schema, unusedInfo } = generateSchema(properties[propName]);
    schemaProperties[propName] = schema;
    unusedInfoProperties[propName] = unusedInfo;
  }
  return { schema: schemaProperties, unusedInfo: unusedInfoProperties };
}

export const generateSchemas = (sections) => {
  let schemas = [];
  let unusedInfos = [];
  for (let section of sections) {
    let result = generateSchema(section);
    if (result !== null) {
      let { schema, unusedInfo } = result;
      let schemaString = JSON.stringify(schema);
      if(!uniqueSchemas.includes(schemaString)){
        uniqueSchemas.push(schemaString);
      }
      else{
        //console.log("This Schema is not unique" + schemaString);
      }
      schemas.push(schema);
      unusedInfos.push(unusedInfo);
    }
  }
  return { schemas, unusedInfos };
};