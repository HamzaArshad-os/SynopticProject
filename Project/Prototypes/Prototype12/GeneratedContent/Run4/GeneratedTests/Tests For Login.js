//Please make sure the correct Libaries are installed
const fs = require("fs");
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);
const path = require("path");
const url = "no url";
const SERVER_1_DESCRIPTION = "undefined";
const GOODMOCKDATA = require("h:/SynopticProject - Copy/Project/Prototypes/Prototype12/GeneratedContent/Run4/GeneratedMockData/goodMockData/LoginUser_goodMockData.json");
const LOGINUSER_BADMOCKDATA_CHANGEDDATATYPE = require("h:/SynopticProject - Copy/Project/Prototypes/Prototype12/GeneratedContent/Run4/GeneratedMockData/badMockData_changedDataType/LoginUser_badMockData_changedDataType.json");
const LOGINUSER_BADMOCKDATA_CHANGEDDATATYPEV2 = require("h:/SynopticProject - Copy/Project/Prototypes/Prototype12/GeneratedContent/Run4/GeneratedMockData/badMockData_changedDataTypeV2/LoginUser_badMockData_changedDataTypeV2.json");

describe('Will log a user into their account. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 200: ', () => {
      return chai
        .request('no url')
        .post("/login")
        .set()

        .send(item)
        .send({
  email: item.email,
  password: item.password,
})
        .then((res) => {
          expect(res).to.have.status(200);
          
          expect(res.body.user_id).to.exist;
expect(res.body.session_token).to.exist;

        })
        .catch((err) => {
          throw err;
        });
    });
  });
});

describe('Will log a user into their account. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  LOGINUSER_BADMOCKDATA_CHANGEDDATATYPE.forEach((item) => {
    it('Should return status 200: ', () => {
      return chai
        .request('no url')
        .post("/login")
        .set()

        .send(item)
        .send({
  email: item.email,
  password: item.password,
})
        .then((res) => {
          expect(res).to.have.status(200);
          
          expect(res.body.user_id).to.exist;
expect(res.body.session_token).to.exist;

        })
        .catch((err) => {
          throw err;
        });
    });
  });
});

describe('Will log a user into their account. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  LOGINUSER_BADMOCKDATA_CHANGEDDATATYPEV2.forEach((item) => {
    it('Should return status 200: ', () => {
      return chai
        .request('no url')
        .post("/login")
        .set()

        .send(item)
        .send({
  email: item.email,
  password: item.password,
})
        .then((res) => {
          expect(res).to.have.status(200);
          
          expect(res.body.user_id).to.exist;
expect(res.body.session_token).to.exist;

        })
        .catch((err) => {
          throw err;
        });
    });
  });
});

describe('Will log a user into their account. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 400: ', () => {
      return chai
        .request('no url')
        .post("/login")
        .set()

        .send(item)
        .send({
  email: item.email,
  password: item.password,
})
        .then((res) => {
          expect(res).to.have.status(400);
          
          
        })
        .catch((err) => {
          throw err;
        });
    });
  });
});

describe('Will log a user into their account. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  LOGINUSER_BADMOCKDATA_CHANGEDDATATYPE.forEach((item) => {
    it('Should return status 400: ', () => {
      return chai
        .request('no url')
        .post("/login")
        .set()

        .send(item)
        .send({
  email: item.email,
  password: item.password,
})
        .then((res) => {
          expect(res).to.have.status(400);
          
          
        })
        .catch((err) => {
          throw err;
        });
    });
  });
});

describe('Will log a user into their account. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  LOGINUSER_BADMOCKDATA_CHANGEDDATATYPEV2.forEach((item) => {
    it('Should return status 400: ', () => {
      return chai
        .request('no url')
        .post("/login")
        .set()

        .send(item)
        .send({
  email: item.email,
  password: item.password,
})
        .then((res) => {
          expect(res).to.have.status(400);
          
          
        })
        .catch((err) => {
          throw err;
        });
    });
  });
});

describe('Will log a user into their account. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 400: ', () => {
      return chai
        .request('no url')
        .post("/login")
        .set()

        .send(item)
        .send({
  email: item.email,
  password: item.password,
})
        .then((res) => {
          expect(res).to.have.status(400);
          
          
        })
        .catch((err) => {
          throw err;
        });
    });
  });
});

describe('Will log a user into their account. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 500: ', () => {
      return chai
        .request('no url')
        .post("/login")
        .set()

        .send(item)
        .send({
  email: item.email,
  password: item.password,
})
        .then((res) => {
          expect(res).to.have.status(500);
          
          
        })
        .catch((err) => {
          throw err;
        });
    });
  });
});

describe('Will log a user into their account. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  LOGINUSER_BADMOCKDATA_CHANGEDDATATYPE.forEach((item) => {
    it('Should return status 500: ', () => {
      return chai
        .request('no url')
        .post("/login")
        .set()

        .send(item)
        .send({
  email: item.email,
  password: item.password,
})
        .then((res) => {
          expect(res).to.have.status(500);
          
          
        })
        .catch((err) => {
          throw err;
        });
    });
  });
});

describe('Will log a user into their account. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  LOGINUSER_BADMOCKDATA_CHANGEDDATATYPEV2.forEach((item) => {
    it('Should return status 500: ', () => {
      return chai
        .request('no url')
        .post("/login")
        .set()

        .send(item)
        .send({
  email: item.email,
  password: item.password,
})
        .then((res) => {
          expect(res).to.have.status(500);
          
          
        })
        .catch((err) => {
          throw err;
        });
    });
  });
});

describe('Will log a user into their account. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 500: ', () => {
      return chai
        .request('no url')
        .post("/login")
        .set()

        .send(item)
        .send({
  email: item.email,
  password: item.password,
})
        .then((res) => {
          expect(res).to.have.status(500);
          
          
        })
        .catch((err) => {
          throw err;
        });
    });
  });
});

describe('Will log a user into their account. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 500: ', () => {
      return chai
        .request('no url')
        .post("/login")
        .set()

        .send(item)
        .send({
  email: item.email,
  password: item.password,
})
        .then((res) => {
          expect(res).to.have.status(500);
          
          
        })
        .catch((err) => {
          throw err;
        });
    });
  });
});
