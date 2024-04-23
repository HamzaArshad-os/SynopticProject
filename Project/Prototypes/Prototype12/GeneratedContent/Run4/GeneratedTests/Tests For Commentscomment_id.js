//Please make sure the correct Libaries are installed
const fs = require("fs");
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);
const path = require("path");
const url = "no url";
const SERVER_1_DESCRIPTION = "undefined";
let COMMENT_ID = -37771871;
let USER = 'your-secuirty or header Info here';

describe('no description', () => {
  it('should return status 200', () => {
    return chai
      .request('no url')
      .delete("/comments/+COMMENT_ID")
      .set('User', USER)
      .then((res) => {
        expect(res).to.have.status(200);
        
        
      })
      .catch((err) => {
        throw err;
      });
  });
});

describe('no description', () => {
  it('should return status 401', () => {
    return chai
      .request('no url')
      .delete("/comments/+COMMENT_ID")
      .set('User', USER)
      .then((res) => {
        expect(res).to.have.status(401);
        
        
      })
      .catch((err) => {
        throw err;
      });
  });
});

describe('no description', () => {
  it('should return status 404', () => {
    return chai
      .request('no url')
      .delete("/comments/+COMMENT_ID")
      .set('User', USER)
      .then((res) => {
        expect(res).to.have.status(404);
        
        
      })
      .catch((err) => {
        throw err;
      });
  });
});

describe('no description', () => {
  it('should return status 500', () => {
    return chai
      .request('no url')
      .delete("/comments/+COMMENT_ID")
      .set('User', USER)
      .then((res) => {
        expect(res).to.have.status(500);
        
        
      })
      .catch((err) => {
        throw err;
      });
  });
});
