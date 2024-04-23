//Please make sure the correct Libaries are installed
const fs = require("fs");
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);
const path = require("path");
const url = "no url";
const SERVER_1_DESCRIPTION = "undefined";
let ARTICLE_ID = 9616475;
const GOODMOCKDATA = require("h:/SynopticProject - Copy/Project/Prototypes/Prototype12/GeneratedContent/Run4/GeneratedMockData/goodMockData/AddArticle_goodMockData.json");
const ADDARTICLE_BADMOCKDATA_CHANGEDDATATYPE = require("h:/SynopticProject - Copy/Project/Prototypes/Prototype12/GeneratedContent/Run4/GeneratedMockData/badMockData_changedDataType/AddArticle_badMockData_changedDataType.json");
const ADDARTICLE_BADMOCKDATA_CHANGEDDATATYPEV2 = require("h:/SynopticProject - Copy/Project/Prototypes/Prototype12/GeneratedContent/Run4/GeneratedMockData/badMockData_changedDataTypeV2/AddArticle_badMockData_changedDataTypeV2.json");

describe('no description', () => {
  it('should return status 200', () => {
    return chai
      .request('no url')
      .get("/articles/+ARTICLE_ID")
      .set()

      .then((res) => {
        expect(res).to.have.status(200);
        
        expect(res.body.article_id).to.exist;
expect(res.body.title).to.exist;
expect(res.body.author).to.exist;
expect(res.body.date_published).to.exist;
expect(res.body.date_edited).to.exist;
expect(res.body.article_text).to.exist;

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
      .get("/articles/+ARTICLE_ID")
      .set()

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
      .get("/articles/+ARTICLE_ID")
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

describe('no description', () => {
  it('should return status 200', () => {
    return chai
      .request('no url')
      .delete("/articles/+ARTICLE_ID")
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
      .delete("/articles/+ARTICLE_ID")
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
      .delete("/articles/+ARTICLE_ID")
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
      .delete("/articles/+ARTICLE_ID")
      .set('User', USER)
      .then((res) => {
        expect(res).to.have.status(500);
        
        
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
        .patch("/articles/+ARTICLE_ID")
        .set('User', USER)
        .send(item)
        .send({
  title: item.title,
  author: item.author,
  article_text: item.article_text,
})
        .then((res) => {
          expect(res).to.have.status(200);
          
          
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
  ADDARTICLE_BADMOCKDATA_CHANGEDDATATYPE.forEach((item) => {
    it('Should return status 200: ', () => {
      return chai
        .request('no url')
        .patch("/articles/+ARTICLE_ID")
        .set('User', USER)
        .send(item)
        .send({
  title: item.title,
  author: item.author,
  article_text: item.article_text,
})
        .then((res) => {
          expect(res).to.have.status(200);
          
          
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
  ADDARTICLE_BADMOCKDATA_CHANGEDDATATYPEV2.forEach((item) => {
    it('Should return status 200: ', () => {
      return chai
        .request('no url')
        .patch("/articles/+ARTICLE_ID")
        .set('User', USER)
        .send(item)
        .send({
  title: item.title,
  author: item.author,
  article_text: item.article_text,
})
        .then((res) => {
          expect(res).to.have.status(200);
          
          
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
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 400: ', () => {
      return chai
        .request('no url')
        .patch("/articles/+ARTICLE_ID")
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

describe('no description', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  ADDARTICLE_BADMOCKDATA_CHANGEDDATATYPE.forEach((item) => {
    it('Should return status 400: ', () => {
      return chai
        .request('no url')
        .patch("/articles/+ARTICLE_ID")
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

describe('no description', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  ADDARTICLE_BADMOCKDATA_CHANGEDDATATYPEV2.forEach((item) => {
    it('Should return status 400: ', () => {
      return chai
        .request('no url')
        .patch("/articles/+ARTICLE_ID")
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

describe('no description', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 400: ', () => {
      return chai
        .request('no url')
        .patch("/articles/+ARTICLE_ID")
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

describe('no description', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 401: ', () => {
      return chai
        .request('no url')
        .patch("/articles/+ARTICLE_ID")
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

describe('no description', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  ADDARTICLE_BADMOCKDATA_CHANGEDDATATYPE.forEach((item) => {
    it('Should return status 401: ', () => {
      return chai
        .request('no url')
        .patch("/articles/+ARTICLE_ID")
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

describe('no description', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  ADDARTICLE_BADMOCKDATA_CHANGEDDATATYPEV2.forEach((item) => {
    it('Should return status 401: ', () => {
      return chai
        .request('no url')
        .patch("/articles/+ARTICLE_ID")
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

describe('no description', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 401: ', () => {
      return chai
        .request('no url')
        .patch("/articles/+ARTICLE_ID")
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

describe('no description', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 401: ', () => {
      return chai
        .request('no url')
        .patch("/articles/+ARTICLE_ID")
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

describe('no description', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 404: ', () => {
      return chai
        .request('no url')
        .patch("/articles/+ARTICLE_ID")
        .set('User', USER)
        .send(item)
        .send({
  title: item.title,
  author: item.author,
  article_text: item.article_text,
})
        .then((res) => {
          expect(res).to.have.status(404);
          
          
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
  ADDARTICLE_BADMOCKDATA_CHANGEDDATATYPE.forEach((item) => {
    it('Should return status 404: ', () => {
      return chai
        .request('no url')
        .patch("/articles/+ARTICLE_ID")
        .set('User', USER)
        .send(item)
        .send({
  title: item.title,
  author: item.author,
  article_text: item.article_text,
})
        .then((res) => {
          expect(res).to.have.status(404);
          
          
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
  ADDARTICLE_BADMOCKDATA_CHANGEDDATATYPEV2.forEach((item) => {
    it('Should return status 404: ', () => {
      return chai
        .request('no url')
        .patch("/articles/+ARTICLE_ID")
        .set('User', USER)
        .send(item)
        .send({
  title: item.title,
  author: item.author,
  article_text: item.article_text,
})
        .then((res) => {
          expect(res).to.have.status(404);
          
          
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
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 404: ', () => {
      return chai
        .request('no url')
        .patch("/articles/+ARTICLE_ID")
        .set('User', USER)
        .send(item)
        .send({
  title: item.title,
  author: item.author,
  article_text: item.article_text,
})
        .then((res) => {
          expect(res).to.have.status(404);
          
          
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
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 404: ', () => {
      return chai
        .request('no url')
        .patch("/articles/+ARTICLE_ID")
        .set('User', USER)
        .send(item)
        .send({
  title: item.title,
  author: item.author,
  article_text: item.article_text,
})
        .then((res) => {
          expect(res).to.have.status(404);
          
          
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
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 404: ', () => {
      return chai
        .request('no url')
        .patch("/articles/+ARTICLE_ID")
        .set('User', USER)
        .send(item)
        .send({
  title: item.title,
  author: item.author,
  article_text: item.article_text,
})
        .then((res) => {
          expect(res).to.have.status(404);
          
          
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
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 500: ', () => {
      return chai
        .request('no url')
        .patch("/articles/+ARTICLE_ID")
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

describe('no description', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  ADDARTICLE_BADMOCKDATA_CHANGEDDATATYPE.forEach((item) => {
    it('Should return status 500: ', () => {
      return chai
        .request('no url')
        .patch("/articles/+ARTICLE_ID")
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

describe('no description', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  ADDARTICLE_BADMOCKDATA_CHANGEDDATATYPEV2.forEach((item) => {
    it('Should return status 500: ', () => {
      return chai
        .request('no url')
        .patch("/articles/+ARTICLE_ID")
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

describe('no description', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 500: ', () => {
      return chai
        .request('no url')
        .patch("/articles/+ARTICLE_ID")
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

describe('no description', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 500: ', () => {
      return chai
        .request('no url')
        .patch("/articles/+ARTICLE_ID")
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

describe('no description', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 500: ', () => {
      return chai
        .request('no url')
        .patch("/articles/+ARTICLE_ID")
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

describe('no description', () => {
  before(() => {
    console.log("[Script: " + filename + "]");
  });
  GOODMOCKDATA.forEach((item) => {
    it('Should return status 500: ', () => {
      return chai
        .request('no url')
        .patch("/articles/+ARTICLE_ID")
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
