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
  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').get('/users').set({}).send({});
    expect(response).to.have.status(500);
  });
});
describe('Will create a new user in the system. ', function() {
  it('should return status 201', async function() {
    let response = await chai.request('http://localhost:3333').post('/users').set({}).send({"first_name":"minim tempor ullamco","last_name":"in tempor","email":"r3xAT@aNysRuZConRmUvQKemAXaDtDnMXI.zxv","password":"in ut commodo adipisicing"});
    expect(response).to.have.status(201);
  });
});
describe('Will create a new user in the system. ', function() {
  it('should return status 400', async function() {
    let response = await chai.request('http://localhost:3333').post('/users').set({}).send({"first_name":"amet","last_name":"in est","email":"JmPhWtsO13@syAJDdJj.sipt","password":"consectetur nulla pariatur"});
    expect(response).to.have.status(400);
  });
});
describe('Will create a new user in the system. ', function() {
  it('should return status 401', async function() {
    let response = await chai.request('http://localhost:3333').post('/users').set({}).send({"first_name":"laboris consequat adipisicing","last_name":"voluptate quis esse","email":"loxW8AgfBlb@tSobIaGVgeirvygaaS.hz","password":"occaecat ullamco exercitation"});
    expect(response).to.have.status(401);
  });
});
describe('Will create a new user in the system. ', function() {
  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').post('/users').set({}).send({"first_name":"laboris","last_name":"dolore ipsum","email":"nPyj@BskHIfvcfqUHOWQgTqlPWdVYdkYN.efw","password":"ea cupidatat sint laboris non"});
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
    let response = await chai.request('http://localhost:3333').post('/login').set({}).send({"email":"wPLHmd2JVN7A@jcTwQxqFg.dpoh","password":"Excepteur Ut"});
    expect(response).to.have.status(200);
  });
});
describe('Will log a user into their account. ', function() {
  it('should return status 400', async function() {
    let response = await chai.request('http://localhost:3333').post('/login').set({}).send({"email":"piG0snLCb@jqqwnalgemklJRGsKHEZtZujqd.ea","password":"ut quis magna"});
    expect(response).to.have.status(400);
  });
});
describe('Will log a user into their account. ', function() {
  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').post('/login').set({}).send({"email":"Qrr@MnHyNIwRyExRCmbOIPewOBb.aag","password":"tempor minim culpa sit ad"});
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
    let response = await chai.request('http://localhost:3333').post('/articles').set({}).send({"title":"ex amet non cupidatat Duis","author":"mollit occaecat ut consectetur","article_text":"incididunt"});
    expect(response).to.have.status(201);
  });
});
describe('Add a new article into the system. ', function() {
  it('should return status 400', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles').set({}).send({"title":"mollit nostrud","author":"labore deserunt nostrud aliquip dolore","article_text":"magna consequat"});
    expect(response).to.have.status(400);
  });
});
describe('Add a new article into the system. ', function() {
  it('should return status 401', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles').set({}).send({"title":"officia consectetur ea non pariatur","author":"dolore","article_text":"sunt irure dolore officia consequat"});
    expect(response).to.have.status(401);
  });
});
describe('Add a new article into the system. ', function() {
  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles').set({}).send({"title":"voluptate","author":"amet veniam dolor esse","article_text":"adipisicing sed"});
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
    let response = await chai.request('http://localhost:3333').patch('/articles/{article_id}').set({}).send({"title":"proident irure","author":"id consectetur velit","article_text":"Duis sed ut"});
    expect(response).to.have.status(200);
  });
});
describe('Update an article (published date will stay the same). ', function() {
  it('should return status 400', async function() {
    let response = await chai.request('http://localhost:3333').patch('/articles/{article_id}').set({}).send({"title":"do","author":"officia proident Excepteur magna eiusmod","article_text":"Ut dolore veniam sit"});
    expect(response).to.have.status(400);
  });
});
describe('Update an article (published date will stay the same). ', function() {
  it('should return status 401', async function() {
    let response = await chai.request('http://localhost:3333').patch('/articles/{article_id}').set({}).send({"title":"est","author":"dolore eiusmod culpa","article_text":"ullamco ipsum"});
    expect(response).to.have.status(401);
  });
});
describe('Update an article (published date will stay the same). ', function() {
  it('should return status 404', async function() {
    let response = await chai.request('http://localhost:3333').patch('/articles/{article_id}').set({}).send({"title":"culpa est","author":"enim eiusmod cupidatat pariatur in","article_text":"consequat reprehenderit ea voluptate est"});
    expect(response).to.have.status(404);
  });
});
describe('Update an article (published date will stay the same). ', function() {
  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').patch('/articles/{article_id}').set({}).send({"title":"culpa ut ut enim velit","author":"ea enim id eiusmod","article_text":"deserunt dolor proident"});
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
    let response = await chai.request('http://localhost:3333').post('/articles/{article_id}/comments').set({}).send({"comment_text":"veniam do"});
    expect(response).to.have.status(201);
  });
});
describe('Add a new comment to an article. ', function() {
  it('should return status 400', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles/{article_id}/comments').set({}).send({"comment_text":"dolor in nulla voluptate ipsum"});
    expect(response).to.have.status(400);
  });
});
describe('Add a new comment to an article. ', function() {
  it('should return status 401', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles/{article_id}/comments').set({}).send({"comment_text":"et occaecat Excepteur proident"});
    expect(response).to.have.status(401);
  });
});
describe('Add a new comment to an article. ', function() {
  it('should return status 404', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles/{article_id}/comments').set({}).send({"comment_text":"cupidatat consectetur ad Duis non"});
    expect(response).to.have.status(404);
  });
});
describe('Add a new comment to an article. ', function() {
  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles/{article_id}/comments').set({}).send({"comment_text":"dolor ea ullamco"});
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
