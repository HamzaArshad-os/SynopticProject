describe('Will return a list of all users within the system. ', function() {
  it('should return status 200', async function() {
    let response = await chai.request('http://localhost:3333').get('/users').set({}).send({});
    expect(response).to.have.status(200);
  });
});
describe('Will return a list of all users within the system. ', function() {
  it('should return status 401', async function() {
    let response = await chai.request('http://localhost:3333').get('/users').set({}).send({});
    expect(response).to.have.status(401);
  });
});


describe('Will return a list of all users within the system. ', function() {
  it('should return status 200', function(done) {
    chai.request('http://localhost:3333').get('/users').set({}).send({}).end(function(err, res) {
      expect(res).to.have.status(200);
      done();
    });
  });
});





describe('Will return a list of all users within the system. ', function() {
  it('should return status 200', async function() {
    let response = await chai.request('http://localhost:3333').get('/users').set({}).send({});
    expect(response).to.have.status(200);
  });
});


















describe('Will return a list of all users within the system. ', function() {
  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').get('/users').set({}).send({});
    expect(response).to.have.status(500);
  });
});
describe('Will create a new user in the system. ', function() {
  it('should return status 201', async function() {
    let response = await chai.request('http://localhost:3333').post('/users').set({}).send({"first_name":"proident","last_name":"nulla","email":"1qT8ZZY7SUybPoj@dgtzmdM.ql","password":"laborum aliqua"});
    expect(response).to.have.status(201);
  });
});
describe('Will create a new user in the system. ', function() {
  it('should return status 400', async function() {
    let response = await chai.request('http://localhost:3333').post('/users').set({}).send({"first_name":"ad laboris non","last_name":"veniam labore","email":"6yAWwZ2Zn8YW@YofJ.kiza","password":"mollit"});
    expect(response).to.have.status(400);
  });
});
describe('Will create a new user in the system. ', function() {
  it('should return status 401', async function() {
    let response = await chai.request('http://localhost:3333').post('/users').set({}).send({"first_name":"Excepteur","last_name":"cillum aliqua pariatur","email":"OQ20I2QNCyh925@iNQpcnJruEHdm.evuv","password":"dolor"});
    expect(response).to.have.status(401);
  });
});
describe('Will create a new user in the system. ', function() {
  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').post('/users').set({}).send({"first_name":"aute nulla","last_name":"nisi tempor do eiusmod","email":"QN6JQQ2QNA0u@woQPGAFx.zdvy","password":"consequat in et Excepteur"});
    expect(response).to.have.status(500);
  });
});
describe('Delete a user from the system. ', function() {
  it('should return status 200', async function() {
    let response = await chai.request('http://localhost:3333').delete('/users/{user_id}').set({}).send({});
    expect(response).to.have.status(200);
  });
});
describe('Delete a user from the system. ', function() {
  it('should return status 401', async function() {
    let response = await chai.request('http://localhost:3333').delete('/users/{user_id}').set({}).send({});
    expect(response).to.have.status(401);
  });
});
describe('Delete a user from the system. ', function() {
  it('should return status 404', async function() {
    let response = await chai.request('http://localhost:3333').delete('/users/{user_id}').set({}).send({});
    expect(response).to.have.status(404);
  });
});
describe('Delete a user from the system. ', function() {
  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').delete('/users/{user_id}').set({}).send({});
    expect(response).to.have.status(500);
  });
});
describe('Will log a user into their account. ', function() {
  it('should return status 200', async function() {
    let response = await chai.request('http://localhost:3333').post('/login').set({}).send({"email":"0KUNMO1iGI6F@AJEcHjFArsVQDPTMlvpzOEjW.ht","password":"proident"});
    expect(response).to.have.status(200);
  });
});
describe('Will log a user into their account. ', function() {
  it('should return status 400', async function() {
    let response = await chai.request('http://localhost:3333').post('/login').set({}).send({"email":"PcYwOZ-pgpN8@MsASHlKTAZbrAuTq.kd","password":"sint incididunt in"});
    expect(response).to.have.status(400);
  });
});
describe('Will log a user into their account. ', function() {
  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').post('/login').set({}).send({"email":"W5zu8IdSZYJu@cncxsA.zaoh","password":"sed in ipsum"});
    expect(response).to.have.status(500);
  });
});
describe('Will log a user out of their account. ', function() {
  it('should return status 200', async function() {
    let response = await chai.request('http://localhost:3333').post('/logout').set({}).send({});
    expect(response).to.have.status(200);
  });
});
describe('Will log a user out of their account. ', function() {
  it('should return status 401', async function() {
    let response = await chai.request('http://localhost:3333').post('/logout').set({}).send({});
    expect(response).to.have.status(401);
  });
});
describe('Will log a user out of their account. ', function() {
  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').post('/logout').set({}).send({});
    expect(response).to.have.status(500);
  });
});
describe('Will return a list of all articles, ordered by date (newest first). ', function() {
  it('should return status 200', async function() {
    let response = await chai.request('http://localhost:3333').get('/articles').set({}).send({});
    expect(response).to.have.status(200);
  });
});
describe('Will return a list of all articles, ordered by date (newest first). ', function() {
  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').get('/articles').set({}).send({});
    expect(response).to.have.status(500);
  });
});
describe('Add a new article into the system. ', function() {
  it('should return status 201', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles').set({}).send({"title":"magna enim","author":"dolor officia","article_text":"enim"});
    expect(response).to.have.status(201);
  });
});
describe('Add a new article into the system. ', function() {
  it('should return status 400', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles').set({}).send({"title":"ut in cupidatat minim ad","author":"minim aliqua","article_text":"dolor dolor dolore"});
    expect(response).to.have.status(400);
  });
});
describe('Add a new article into the system. ', function() {
  it('should return status 401', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles').set({}).send({"title":"magna in","author":"qui velit nostrud Excepteur ad","article_text":"veniam eu"});
    expect(response).to.have.status(401);
  });
});
describe('Add a new article into the system. ', function() {
  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles').set({}).send({"title":"in eiusmod","author":"do","article_text":"minim commodo id"});
    expect(response).to.have.status(500);
  });
});
describe('Retrieves the information for a single article. ', function() {
  it('should return status 200', async function() {
    let response = await chai.request('http://localhost:3333').get('/articles/{article_id}').set({}).send({});
    expect(response).to.have.status(200);
  });
});
describe('Retrieves the information for a single article. ', function() {
  it('should return status 404', async function() {
    let response = await chai.request('http://localhost:3333').get('/articles/{article_id}').set({}).send({});
    expect(response).to.have.status(404);
  });
});
describe('Retrieves the information for a single article. ', function() {
  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').get('/articles/{article_id}').set({}).send({});
    expect(response).to.have.status(500);
  });
});
describe('Deletes an article from the system. ', function() {
  it('should return status 200', async function() {
    let response = await chai.request('http://localhost:3333').delete('/articles/{article_id}').set({}).send({});
    expect(response).to.have.status(200);
  });
});
describe('Deletes an article from the system. ', function() {
  it('should return status 401', async function() {
    let response = await chai.request('http://localhost:3333').delete('/articles/{article_id}').set({}).send({});
    expect(response).to.have.status(401);
  });
});
describe('Deletes an article from the system. ', function() {
  it('should return status 404', async function() {
    let response = await chai.request('http://localhost:3333').delete('/articles/{article_id}').set({}).send({});
    expect(response).to.have.status(404);
  });
});
describe('Deletes an article from the system. ', function() {
  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').delete('/articles/{article_id}').set({}).send({});
    expect(response).to.have.status(500);
  });
});
describe('Update an article (published date will stay the same). ', function() {
  it('should return status 200', async function() {
    let response = await chai.request('http://localhost:3333').patch('/articles/{article_id}').set({}).send({"title":"exercitation","author":"qui sint aute velit","article_text":"dolor eiusmod fugiat"});
    expect(response).to.have.status(200);
  });
});
describe('Update an article (published date will stay the same). ', function() {
  it('should return status 400', async function() {
    let response = await chai.request('http://localhost:3333').patch('/articles/{article_id}').set({}).send({"title":"laboris","author":"quis ex","article_text":"ex eu minim voluptate"});
    expect(response).to.have.status(400);
  });
});
describe('Update an article (published date will stay the same). ', function() {
  it('should return status 401', async function() {
    let response = await chai.request('http://localhost:3333').patch('/articles/{article_id}').set({}).send({"title":"aliqua Excepteur","author":"quis velit anim","article_text":"tempor"});
    expect(response).to.have.status(401);
  });
});
describe('Update an article (published date will stay the same). ', function() {
  it('should return status 404', async function() {
    let response = await chai.request('http://localhost:3333').patch('/articles/{article_id}').set({}).send({"title":"esse eiusmod Excepteur mollit adipisicing","author":"velit exercitation Duis anim","article_text":"labore nostrud et"});
    expect(response).to.have.status(404);
  });
});
describe('Update an article (published date will stay the same). ', function() {
  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').patch('/articles/{article_id}').set({}).send({"title":"nulla id","author":"ad exercitation","article_text":"veniam dolor sunt commodo cillum"});
    expect(response).to.have.status(500);
  });
});
describe('Get a list of comments for a given article. ', function() {
  it('should return status 200', async function() {
    let response = await chai.request('http://localhost:3333').get('/articles/{article_id}/comments').set({}).send({});
    expect(response).to.have.status(200);
  });
});
describe('Get a list of comments for a given article. ', function() {
  it('should return status 404', async function() {
    let response = await chai.request('http://localhost:3333').get('/articles/{article_id}/comments').set({}).send({});
    expect(response).to.have.status(404);
  });
});
describe('Get a list of comments for a given article. ', function() {
  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').get('/articles/{article_id}/comments').set({}).send({});
    expect(response).to.have.status(500);
  });
});
describe('Add a new comment to an article. ', function() {
  it('should return status 201', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles/{article_id}/comments').set({}).send({"comment_text":"dolor reprehenderit velit"});
    expect(response).to.have.status(201);
  });
});
describe('Add a new comment to an article. ', function() {
  it('should return status 400', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles/{article_id}/comments').set({}).send({"comment_text":"Duis dolore"});
    expect(response).to.have.status(400);
  });
});
describe('Add a new comment to an article. ', function() {
  it('should return status 401', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles/{article_id}/comments').set({}).send({"comment_text":"sunt"});
    expect(response).to.have.status(401);
  });
});
describe('Add a new comment to an article. ', function() {
  it('should return status 404', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles/{article_id}/comments').set({}).send({"comment_text":"reprehenderit est laborum nisi consectetur"});
    expect(response).to.have.status(404);
  });
});
describe('Add a new comment to an article. ', function() {
  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles/{article_id}/comments').set({}).send({"comment_text":"consequat adipisicing in aliqua do"});
    expect(response).to.have.status(500);
  });
});
describe('Delete a comment from an article. ', function() {
  it('should return status 200', async function() {
    let response = await chai.request('http://localhost:3333').delete('/comments/{comment_id}').set({}).send({});
    expect(response).to.have.status(200);
  });
});
describe('Delete a comment from an article. ', function() {
  it('should return status 401', async function() {
    let response = await chai.request('http://localhost:3333').delete('/comments/{comment_id}').set({}).send({});
    expect(response).to.have.status(401);
  });
});
describe('Delete a comment from an article. ', function() {
  it('should return status 404', async function() {
    let response = await chai.request('http://localhost:3333').delete('/comments/{comment_id}').set({}).send({});
    expect(response).to.have.status(404);
  });
});
describe('Delete a comment from an article. ', function() {
  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').delete('/comments/{comment_id}').set({}).send({});
    expect(response).to.have.status(500);
  });
});
