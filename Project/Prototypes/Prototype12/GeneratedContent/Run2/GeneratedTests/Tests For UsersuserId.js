//Please make sure the correct Libaries are installed
const fs = require("fs");
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);
const path = require("path");
const url = "no url";
const SERVER_1_DESCRIPTION = "undefined";
let USERID = 68594034;
const GOODMOCKDATA = require("h:/SynopticProject - Copy/Project/Prototypes/Prototype12/GeneratedContent/Run2/GeneratedMockData/goodMockData/User_goodMockData.json");
const USER_BADMOCKDATA_CHANGEDDATATYPE = require("h:/SynopticProject - Copy/Project/Prototypes/Prototype12/GeneratedContent/Run2/GeneratedMockData/badMockData_changedDataType/User_badMockData_changedDataType.json");
const USER_BADMOCKDATA_CHANGEDDATATYPEV2 = require("h:/SynopticProject - Copy/Project/Prototypes/Prototype12/GeneratedContent/Run2/GeneratedMockData/badMockData_changedDataTypeV2/User_badMockData_changedDataTypeV2.json");

describe('no description', () => {
  it('should return status 200', () => {
    return chai
      .request('no url')
      .get(/users/+USERID)
      .set()

      .then((res) => {
        expect(res).to.have.status(200);
        
        expect(res.body.id).to.exist;
expect(res.body.name).to.exist;

      })
      .catch((err) => {
        throw err;
      });
  });
});

describe('no description', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 200: ', () => {
      return chai
        .request('no url')
        .post(/users/+USERID)
        .set()

        .send(item)
        .send({
  id: item.id,
  name: item.name,
})
        .then((res) => {
          expect(res).to.have.status(200);
          
          expect(res.body.id).to.exist;
expect(res.body.name).to.exist;

        })
        .catch((err) => {
          throw err;
        });
    });
  });
});

describe('no description', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  USER_BADMOCKDATA_CHANGEDDATATYPE.forEach((item) => {
    it('Should return status 200: ', () => {
      return chai
        .request('no url')
        .post(/users/+USERID)
        .set()

        .send(item)
        .send({
  id: item.id,
  name: item.name,
})
        .then((res) => {
          expect(res).to.have.status(200);
          
          expect(res.body.id).to.exist;
expect(res.body.name).to.exist;

        })
        .catch((err) => {
          throw err;
        });
    });
  });
});

describe('no description', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  USER_BADMOCKDATA_CHANGEDDATATYPEV2.forEach((item) => {
    it('Should return status 200: ', () => {
      return chai
        .request('no url')
        .post(/users/+USERID)
        .set()

        .send(item)
        .send({
  id: item.id,
  name: item.name,
})
        .then((res) => {
          expect(res).to.have.status(200);
          
          expect(res.body.id).to.exist;
expect(res.body.name).to.exist;

        })
        .catch((err) => {
          throw err;
        });
    });
  });
});

describe('no description', () => {
  it('should return status 204', () => {
    return chai
      .request('no url')
      .delete(/users/+USERID)
      .set()

      .then((res) => {
        expect(res).to.have.status(204);
        
        
      })
      .catch((err) => {
        throw err;
      });
  });
});
