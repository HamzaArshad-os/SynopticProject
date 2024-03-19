import fs from "fs";
import yaml from "js-yaml";
import { JSONSchemaFaker } from "json-schema-faker";
import * as testfunctions from "./testgeneration.js";

// Define error list
export let errorList = [];


export const stringify = (json)=>{
  JSON.stringify( json, null, 2)
}

export const readYamlFile = (yamlFile) => {
    try {
      let fileContents = fs.readFileSync(yamlFile, "utf8");
      let data = yaml.load(fileContents);
      return data;
    } catch (e) {
      console.error(e);
      errorList.push(e);
    }
  };


  export const getSchemaInformation = (data, schema, information) => {
    let schemaData = data;
    let schemaPathParts = testfunctions.schema_path.split('/');
  
    for (const part of schemaPathParts) {
      if (schemaData.hasOwnProperty(part)) {
        schemaData = schemaData[part];
      } else {
        //console.error(`Path ${part} not found in the provided data.`);
        return null;
      }
    }
  
    if (schemaData[schema] && schemaData[schema].hasOwnProperty(information)) {
      return schemaData[schema][information];
    } else {
      //console.error(`Schema ${schema} or information ${information} not found in the provided data.`);
      return null;
    }
  }


  export const mockBodyGenerator = (data, info) => {
    try {
      const generatedData = { refs: [], inline: [] };
  
      // Generate mock data for referenced schemas
      if (info.refs) {
        info.refs.forEach((ref) => {
          const referencedData = testfunctions.getRefrencedData(data, ref);
          const generatedRefData = JSONSchemaFaker.generate(referencedData);  
          generatedData.refs.push(generatedRefData);
        });
      }
      console.log(info);
      // Generate mock data for inline schemas
      if (info.inline) {
        info.inline.forEach((inlineSchema) => {
          let generatedInlineData;
          // Check if the inlineSchema is a simple type
          if (['integer', 'number', 'string', 'boolean'].includes(inlineSchema.type)) {
            // Use JSONSchemaFaker to generate data directly
            generatedInlineData = JSONSchemaFaker.generate({type: inlineSchema.type});
          } else {
            // For complex types, use the existing method
            generatedInlineData = JSONSchemaFaker.generate(inlineSchema);
          }
          generatedData.inline.push(generatedInlineData);
        });
      }
  
      return generatedData;
    } catch(error) {
      console.log(error);
    }
  };
  
  

export const mockParamterGenerator = (data, info) => {
  try {
    const generatedData = { refs: [], inline: [] };

    // Generate mock data for referenced schemas
    if (info.refs) {
      info.refs.forEach((ref) => {
        const referencedData = testfunctions.getRefrencedData(data, ref);
        const generatedRefData = JSONSchemaFaker.generate(referencedData);  
        generatedData.refs.push(generatedRefData);
      });
    }

    // Generate mock data for inline schemas
    if (info.inline) {
      info.inline.forEach((inlineSchema) => {
        let generatedInlineData;
        // Check if the inlineSchema is a simple type
        if (['integer', 'number', 'string', 'boolean'].includes(inlineSchema.schema.type)) {
          // Use JSONSchemaFaker to generate data directly
          console.log("edehnhfg");
          generatedInlineData = JSONSchemaFaker.generate({type: inlineSchema.schema.type});
        } else {
          // For complex types, use the existing method
          generatedInlineData = JSONSchemaFaker.generate(inlineSchema.schema);
        }
        generatedData.inline.push(generatedInlineData);
      });
    }
    console.log("edehnfdffhfg");
    return generatedData;
  } catch(error) {
    console.log(error);
  }
};




//generate body
export const generateMockBody = (data, endpoint, method, requestPart) => {
  

  try {
    const requestBody = testfunctions.getSchemaPathsForRequest(data, endpoint, method,"requestBody");
    //console.log(JSON.stringify(requestBody, null, 2));
  //const schemaRef = requestBody.refs[0];
  //console.log(schemaRef);
  //mockBodyGenerator(data, requestBody);
  return mockBodyGenerator(data, requestBody);
  //console.log("Completed");
  }
  catch(error){
    console.log(error)
    console.log("Proboaby no body for this request so no refrences or inline")
    return null;
  }
};

//generate parameters
export const generateMockParameter = (data, endpoint, method) => {
  const requestedParamters = testfunctions.getParametersForEndpoint(data, endpoint, method,);
  //console.log(JSON.stringify(requestedParamters, null, 2));
  const a = mockParamterGenerator(data, requestedParamters);
  console.log(a.inline);
  //return a;
 // try {
  //  const requestBody = testfunctions.getParametersForEndpoint(data, endpoint, method,);
  //  console.log(JSON.stringify(requestBody, null, 2));
  //const schemaRef = requestBody.refs[0];
  //console.log(schemaRef);
  //mockBodyGenerator(data, requestBody);
  //return mockBodyGenerator(data, requestBody);
  //console.log("Completed");
  //}
// catch(error){
   // console.log(error)
   // console.log("Proboaby no body for this request so no refrences or inline")
  //  return null;
 // }
};








 

function main() {
 // const yamlFile = "Project/specificationExamples/tradingviewSpecResolvedOnly.yaml";
  //const yamlFile = "Project/specificationExamples/exampleYAMLResolved.yaml"; tempResolved.yaml
  const yamlFile = "Project/specificationExamples/tempResolved.yaml"; 
  
    const data = readYamlFile(yamlFile);
    const endpoint = "/users/{userId}";
    const method = "post";
    const requestPart = "requestBody";
    //const testSchema = "SingleArticle";

   // const endpoint = "/users/{user_id}";
    //const requestPart = "requestBody"; //Uneeded for  paramters
     //const method = "delete";
     const testSchema = "SingleArticle";


   const returnedBodyMockData = generateMockBody(data, endpoint, method, requestPart);
   console.log(returnedBodyMockData);
  // const returnedParamterMockData= generateMockParameter(data, endpoint,method,);
  // console.log(returnedParamterMockData);

  }
  
  //main();

  //Need to  test Paramters that are refrence sinstead