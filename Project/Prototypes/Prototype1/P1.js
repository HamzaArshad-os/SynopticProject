import fs from "fs";
import yaml from "js-yaml";


import { fileURLToPath } from "url";
import { dirname, join } from "path";

function readYamlFile(yamlFile) {
  try {
    let fileContents = fs.readFileSync(yamlFile, "utf8");
    let data = yaml.load(fileContents);
    console.log(JSON.stringify(data, null, 2));
    return data;
  } catch (e) {
    console.log(e);
  }
}

function generateTestCases(data, endpoint) {
  const endpointData = data.paths[endpoint];
  for (const method in endpointData) {
    console.log(
      `Generating test cases for ${method.toUpperCase()} ${endpoint}`
    );
    const responses = endpointData[method].responses;
    for (const statusCode in responses) {
      console.log(`Test case for status code ${statusCode}:`);
      console.log(JSON.stringify(responses[statusCode], null, 2));
    }
  }
}

function generateTestCode(endpoint, method, responses) {
  let testCode = `describe('${method.toUpperCase()} ${endpoint}', function() {\n`;
  for (const statusCode in responses) {
    testCode += `  it('should return status ${statusCode}', async function() {\n`;
    testCode += `    let response;\n`;
    testCode += `    try {\n`;
    testCode += `      response = await axios.${method}('http://localhost:3333${endpoint}');\n`;
    testCode += `    } catch (error) {\n`;
    testCode += `      response = error.response;\n`;
    testCode += `    }\n`;
    testCode += `    assert.equal(response.status, ${statusCode});\n`;
    testCode += `  });\n\n`;
  }
  testCode += "});\n";
  return testCode;
}

function addTestCode(tc) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const path = join(__dirname, "tests.js");

  console.log(`Writing the following test code to ${path}:\n${tc}`);
  fs.writeFileSync(path, tc);
}

function main() {
  const yamlFile = "Project/specificationExamples/exampleYAMLResolved.yaml";
  const data = readYamlFile(yamlFile);
  //console.log(data);
  const endpoint = "/users";
  let testCode = "";
  for (const method in data.paths[endpoint]) {
    testCode += generateTestCode(
      endpoint,
      method,
      data.paths[endpoint][method].responses
    );
  }

  addTestCode(testCode);
}

main();
