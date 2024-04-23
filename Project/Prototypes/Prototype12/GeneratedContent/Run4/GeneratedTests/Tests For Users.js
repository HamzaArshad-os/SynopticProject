//Please make sure the correct Libaries are installed
const fs = require("fs");
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);
const path = require("path");
const url = "no url";
const SERVER_1_DESCRIPTION = "undefined";
const GOODMOCKDATA = require("h:/SynopticProject - Copy/Project/Prototypes/Prototype12/GeneratedContent/Run4/GeneratedMockData/goodMockData/AddUser_goodMockData.json");
const ADDUSER_BADMOCKDATA_CHANGEDDATATYPE = require("h:/SynopticProject - Copy/Project/Prototypes/Prototype12/GeneratedContent/Run4/GeneratedMockData/badMockData_changedDataType/AddUser_badMockData_changedDataType.json");
const ADDUSER_BADMOCKDATA_CHANGEDDATATYPEV2 = require("h:/SynopticProject - Copy/Project/Prototypes/Prototype12/GeneratedContent/Run4/GeneratedMockData/badMockData_changedDataTypeV2/AddUser_badMockData_changedDataTypeV2.json");
let USER = 'your-secuirty or header Info here';

describe('Will return a list of all users within the system. ', () => {
  it('should return status 200', () => {
    return chai
      .request('no url')
      .get("/users")
      .set('User', USER)
      .then((res) => {
        expect(res).to.have.status(200);
        
        
      })
      .catch((err) => {
        throw err;
      });
  });
});

describe('Will return a list of all users within the system. ', () => {
  it('should return status 401', () => {
    return chai
      .request('no url')
      .get("/users")
      .set('User', USER)
      .then((res) => {
        expect(res).to.have.status(401);
        
        
      })
      .catch((err) => {
        throw err;
      });
  });
});

describe('Will return a list of all users within the system. ', () => {
  it('should return status 500', () => {
    return chai
      .request('no url')
      .get("/users")
      .set('User', USER)
      .then((res) => {
        expect(res).to.have.status(500);
        
        
      })
      .catch((err) => {
        throw err;
      });
  });
});

describe('Will create a new user in the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 201: ', () => {
      return chai
        .request('no url')
        .post("/users")
        .set('User', USER)
        .send(item)
        .send({
  first_name: item.first_name,
  last_name: item.last_name,
  email: item.email,
  password: item.password,
})
        .then((res) => {
          expect(res).to.have.status(201);
          
          expect(res.body.user_id).to.exist;

        })
        .catch((err) => {
          throw err;
        });
    });
  });
});

describe('Will create a new user in the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  ADDUSER_BADMOCKDATA_CHANGEDDATATYPE.forEach((item) => {
    it('Should return status 201: ', () => {
      return chai
        .request('no url')
        .post("/users")
        .set('User', USER)
        .send(item)
        .send({
  first_name: item.first_name,
  last_name: item.last_name,
  email: item.email,
  password: item.password,
})
        .then((res) => {
          expect(res).to.have.status(201);
          
          expect(res.body.user_id).to.exist;

        })
        .catch((err) => {
          throw err;
        });
    });
  });
});

describe('Will create a new user in the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  ADDUSER_BADMOCKDATA_CHANGEDDATATYPEV2.forEach((item) => {
    it('Should return status 201: ', () => {
      return chai
        .request('no url')
        .post("/users")
        .set('User', USER)
        .send(item)
        .send({
  first_name: item.first_name,
  last_name: item.last_name,
  email: item.email,
  password: item.password,
})
        .then((res) => {
          expect(res).to.have.status(201);
          
          expect(res.body.user_id).to.exist;

        })
        .catch((err) => {
          throw err;
        });
    });
  });
});

describe('Will create a new user in the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 400: ', () => {
      return chai
        .request('no url')
        .post("/users")
        .set('User', USER)
        .send(item)
        .send({
  first_name: item.first_name,
  last_name: item.last_name,
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

describe('Will create a new user in the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  ADDUSER_BADMOCKDATA_CHANGEDDATATYPE.forEach((item) => {
    it('Should return status 400: ', () => {
      return chai
        .request('no url')
        .post("/users")
        .set('User', USER)
        .send(item)
        .send({
  first_name: item.first_name,
  last_name: item.last_name,
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

describe('Will create a new user in the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  ADDUSER_BADMOCKDATA_CHANGEDDATATYPEV2.forEach((item) => {
    it('Should return status 400: ', () => {
      return chai
        .request('no url')
        .post("/users")
        .set('User', USER)
        .send(item)
        .send({
  first_name: item.first_name,
  last_name: item.last_name,
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

describe('Will create a new user in the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 400: ', () => {
      return chai
        .request('no url')
        .post("/users")
        .set('User', USER)
        .send(item)
        .send({
  first_name: item.first_name,
  last_name: item.last_name,
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

describe('Will create a new user in the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 401: ', () => {
      return chai
        .request('no url')
        .post("/users")
        .set('User', USER)
        .send(item)
        .send({
  first_name: item.first_name,
  last_name: item.last_name,
  email: item.email,
  password: item.password,
})
        .then((res) => {
          expect(res).to.have.status(401);
          
          
        })
        .catch((err) => {
          throw err;
        });
    });
  });
});

describe('Will create a new user in the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  ADDUSER_BADMOCKDATA_CHANGEDDATATYPE.forEach((item) => {
    it('Should return status 401: ', () => {
      return chai
        .request('no url')
        .post("/users")
        .set('User', USER)
        .send(item)
        .send({
  first_name: item.first_name,
  last_name: item.last_name,
  email: item.email,
  password: item.password,
})
        .then((res) => {
          expect(res).to.have.status(401);
          
          
        })
        .catch((err) => {
          throw err;
        });
    });
  });
});

describe('Will create a new user in the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  ADDUSER_BADMOCKDATA_CHANGEDDATATYPEV2.forEach((item) => {
    it('Should return status 401: ', () => {
      return chai
        .request('no url')
        .post("/users")
        .set('User', USER)
        .send(item)
        .send({
  first_name: item.first_name,
  last_name: item.last_name,
  email: item.email,
  password: item.password,
})
        .then((res) => {
          expect(res).to.have.status(401);
          
          
        })
        .catch((err) => {
          throw err;
        });
    });
  });
});

describe('Will create a new user in the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 401: ', () => {
      return chai
        .request('no url')
        .post("/users")
        .set('User', USER)
        .send(item)
        .send({
  first_name: item.first_name,
  last_name: item.last_name,
  email: item.email,
  password: item.password,
})
        .then((res) => {
          expect(res).to.have.status(401);
          
          
        })
        .catch((err) => {
          throw err;
        });
    });
  });
});

describe('Will create a new user in the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 401: ', () => {
      return chai
        .request('no url')
        .post("/users")
        .set('User', USER)
        .send(item)
        .send({
  first_name: item.first_name,
  last_name: item.last_name,
  email: item.email,
  password: item.password,
})
        .then((res) => {
          expect(res).to.have.status(401);
          
          
        })
        .catch((err) => {
          throw err;
        });
    });
  });
});

describe('Will create a new user in the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 500: ', () => {
      return chai
        .request('no url')
        .post("/users")
        .set('User', USER)
        .send(item)
        .send({
  first_name: item.first_name,
  last_name: item.last_name,
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

describe('Will create a new user in the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  ADDUSER_BADMOCKDATA_CHANGEDDATATYPE.forEach((item) => {
    it('Should return status 500: ', () => {
      return chai
        .request('no url')
        .post("/users")
        .set('User', USER)
        .send(item)
        .send({
  first_name: item.first_name,
  last_name: item.last_name,
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

describe('Will create a new user in the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  ADDUSER_BADMOCKDATA_CHANGEDDATATYPEV2.forEach((item) => {
    it('Should return status 500: ', () => {
      return chai
        .request('no url')
        .post("/users")
        .set('User', USER)
        .send(item)
        .send({
  first_name: item.first_name,
  last_name: item.last_name,
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

describe('Will create a new user in the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 500: ', () => {
      return chai
        .request('no url')
        .post("/users")
        .set('User', USER)
        .send(item)
        .send({
  first_name: item.first_name,
  last_name: item.last_name,
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

describe('Will create a new user in the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 500: ', () => {
      return chai
        .request('no url')
        .post("/users")
        .set('User', USER)
        .send(item)
        .send({
  first_name: item.first_name,
  last_name: item.last_name,
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

describe('Will create a new user in the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 500: ', () => {
      return chai
        .request('no url')
        .post("/users")
        .set('User', USER)
        .send(item)
        .send({
  first_name: item.first_name,
  last_name: item.last_name,
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
