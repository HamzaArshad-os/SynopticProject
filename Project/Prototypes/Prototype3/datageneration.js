export const generateMockData = (schema) => {
  let mockData = {};
  for (const key in schema.properties) {
    const property = schema.properties[key];
    switch (property.type) {
      case "string":
        if (property.format === "email") {
          mockData[key] = faker.internet.email();
        } else {
          mockData[key] = faker.random.word();
        }
        break;
      case "number":
        mockData[key] = faker.random.number();
        break;
      case "boolean":
        mockData[key] = faker.random.boolean();
        break;
      default:
        console.log(`No mock data generator for type ${property.type}`);
    }
  }
  return mockData;
};
