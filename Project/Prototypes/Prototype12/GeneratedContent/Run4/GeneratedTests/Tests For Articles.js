//Please make sure the correct Libaries are installed
const fs = require("fs");
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);
const path = require("path");
const url = "no url";
const SERVER_1_DESCRIPTION = "undefined";
const GOODMOCKDATA = require("h:/SynopticProject - Copy/Project/Prototypes/Prototype12/GeneratedContent/Run4/GeneratedMockData/goodMockData/AddArticle_goodMockData.json");
const ADDARTICLE_BADMOCKDATA_CHANGEDDATATYPE = require("h:/SynopticProject - Copy/Project/Prototypes/Prototype12/GeneratedContent/Run4/GeneratedMockData/badMockData_changedDataType/AddArticle_badMockData_changedDataType.json");
const ADDARTICLE_BADMOCKDATA_CHANGEDDATATYPEV2 = require("h:/SynopticProject - Copy/Project/Prototypes/Prototype12/GeneratedContent/Run4/GeneratedMockData/badMockData_changedDataTypeV2/AddArticle_badMockData_changedDataTypeV2.json");

describe('Will return a list of all articles, ordered by date (newest first). ', () => {
  it('should return status 200', () => {
    return chai
      .request('no url')
      .get("/articles")
      .set()

      .then((res) => {
        expect(res).to.have.status(200);
        
        
      })
      .catch((err) => {
        throw err;
      });
  });
});

describe('Will return a list of all articles, ordered by date (newest first). ', () => {
  it('should return status 500', () => {
    return chai
      .request('no url')
      .get("/articles")
      .set()

      .then((res) => {
        expect(res).to.have.status(500);
        
        
      })
      .catch((err) => {
        throw err;
      });
  });
});
let USER = 'your-secuirty or header Info here';

describe('Add a new article into the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 201: ', () => {
      return chai
        .request('no url')
        .post("/articles")
        .set('User', USER)
        .send(item)
        .send({
  title: item.title,
  author: item.author,
  article_text: item.article_text,
})
        .then((res) => {
          expect(res).to.have.status(201);
          
          expect(res.body.article_id).to.exist;

        })
        .catch((err) => {
          throw err;
        });
    });
  });
});

describe('Add a new article into the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  ADDARTICLE_BADMOCKDATA_CHANGEDDATATYPE.forEach((item) => {
    it('Should return status 201: ', () => {
      return chai
        .request('no url')
        .post("/articles")
        .set('User', USER)
        .send(item)
        .send({
  title: item.title,
  author: item.author,
  article_text: item.article_text,
})
        .then((res) => {
          expect(res).to.have.status(201);
          
          expect(res.body.article_id).to.exist;

        })
        .catch((err) => {
          throw err;
        });
    });
  });
});

describe('Add a new article into the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  ADDARTICLE_BADMOCKDATA_CHANGEDDATATYPEV2.forEach((item) => {
    it('Should return status 201: ', () => {
      return chai
        .request('no url')
        .post("/articles")
        .set('User', USER)
        .send(item)
        .send({
  title: item.title,
  author: item.author,
  article_text: item.article_text,
})
        .then((res) => {
          expect(res).to.have.status(201);
          
          expect(res.body.article_id).to.exist;

        })
        .catch((err) => {
          throw err;
        });
    });
  });
});

describe('Add a new article into the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 400: ', () => {
      return chai
        .request('no url')
        .post("/articles")
        .set('User', USER)
        .send(item)
        .send({
  title: item.title,
  author: item.author,
  article_text: item.article_text,
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

describe('Add a new article into the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  ADDARTICLE_BADMOCKDATA_CHANGEDDATATYPE.forEach((item) => {
    it('Should return status 400: ', () => {
      return chai
        .request('no url')
        .post("/articles")
        .set('User', USER)
        .send(item)
        .send({
  title: item.title,
  author: item.author,
  article_text: item.article_text,
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

describe('Add a new article into the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  ADDARTICLE_BADMOCKDATA_CHANGEDDATATYPEV2.forEach((item) => {
    it('Should return status 400: ', () => {
      return chai
        .request('no url')
        .post("/articles")
        .set('User', USER)
        .send(item)
        .send({
  title: item.title,
  author: item.author,
  article_text: item.article_text,
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

describe('Add a new article into the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 400: ', () => {
      return chai
        .request('no url')
        .post("/articles")
        .set('User', USER)
        .send(item)
        .send({
  title: item.title,
  author: item.author,
  article_text: item.article_text,
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

describe('Add a new article into the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 401: ', () => {
      return chai
        .request('no url')
        .post("/articles")
        .set('User', USER)
        .send(item)
        .send({
  title: item.title,
  author: item.author,
  article_text: item.article_text,
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

describe('Add a new article into the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  ADDARTICLE_BADMOCKDATA_CHANGEDDATATYPE.forEach((item) => {
    it('Should return status 401: ', () => {
      return chai
        .request('no url')
        .post("/articles")
        .set('User', USER)
        .send(item)
        .send({
  title: item.title,
  author: item.author,
  article_text: item.article_text,
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

describe('Add a new article into the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  ADDARTICLE_BADMOCKDATA_CHANGEDDATATYPEV2.forEach((item) => {
    it('Should return status 401: ', () => {
      return chai
        .request('no url')
        .post("/articles")
        .set('User', USER)
        .send(item)
        .send({
  title: item.title,
  author: item.author,
  article_text: item.article_text,
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

describe('Add a new article into the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 401: ', () => {
      return chai
        .request('no url')
        .post("/articles")
        .set('User', USER)
        .send(item)
        .send({
  title: item.title,
  author: item.author,
  article_text: item.article_text,
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

describe('Add a new article into the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 401: ', () => {
      return chai
        .request('no url')
        .post("/articles")
        .set('User', USER)
        .send(item)
        .send({
  title: item.title,
  author: item.author,
  article_text: item.article_text,
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

describe('Add a new article into the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 500: ', () => {
      return chai
        .request('no url')
        .post("/articles")
        .set('User', USER)
        .send(item)
        .send({
  title: item.title,
  author: item.author,
  article_text: item.article_text,
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

describe('Add a new article into the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  ADDARTICLE_BADMOCKDATA_CHANGEDDATATYPE.forEach((item) => {
    it('Should return status 500: ', () => {
      return chai
        .request('no url')
        .post("/articles")
        .set('User', USER)
        .send(item)
        .send({
  title: item.title,
  author: item.author,
  article_text: item.article_text,
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

describe('Add a new article into the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  ADDARTICLE_BADMOCKDATA_CHANGEDDATATYPEV2.forEach((item) => {
    it('Should return status 500: ', () => {
      return chai
        .request('no url')
        .post("/articles")
        .set('User', USER)
        .send(item)
        .send({
  title: item.title,
  author: item.author,
  article_text: item.article_text,
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

describe('Add a new article into the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 500: ', () => {
      return chai
        .request('no url')
        .post("/articles")
        .set('User', USER)
        .send(item)
        .send({
  title: item.title,
  author: item.author,
  article_text: item.article_text,
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

describe('Add a new article into the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 500: ', () => {
      return chai
        .request('no url')
        .post("/articles")
        .set('User', USER)
        .send(item)
        .send({
  title: item.title,
  author: item.author,
  article_text: item.article_text,
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

describe('Add a new article into the system. ', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 500: ', () => {
      return chai
        .request('no url')
        .post("/articles")
        .set('User', USER)
        .send(item)
        .send({
  title: item.title,
  author: item.author,
  article_text: item.article_text,
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
