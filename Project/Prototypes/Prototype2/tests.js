describe('GET /users', function() {
  it('should return status 200', async function() {
    let response = await chai.request('http://localhost:3333').get('/users').set({}).send({});
    expect(response).to.have.status(200);
  });

  it('should return status 401', async function() {
    let response = await chai.request('http://localhost:3333').get('/users').set({}).send({});
    expect(response).to.have.status(401);
  });

  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').get('/users').set({}).send({});
    expect(response).to.have.status(500);
  });

});
describe('POST /users', function() {
  it('should return status 201', async function() {
    let response = await chai.request('http://localhost:3333').post('/users').set({}).send({});
    expect(response).to.have.status(201);
  });

  it('should return status 400', async function() {
    let response = await chai.request('http://localhost:3333').post('/users').set({}).send({});
    expect(response).to.have.status(400);
  });

  it('should return status 401', async function() {
    let response = await chai.request('http://localhost:3333').post('/users').set({}).send({});
    expect(response).to.have.status(401);
  });

  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').post('/users').set({}).send({});
    expect(response).to.have.status(500);
  });

});
describe('DELETE /users/{user_id}', function() {
  it('should return status 200', async function() {
    let response = await chai.request('http://localhost:3333').delete('/users/{user_id}').set({}).send({});
    expect(response).to.have.status(200);
  });

  it('should return status 401', async function() {
    let response = await chai.request('http://localhost:3333').delete('/users/{user_id}').set({}).send({});
    expect(response).to.have.status(401);
  });

  it('should return status 404', async function() {
    let response = await chai.request('http://localhost:3333').delete('/users/{user_id}').set({}).send({});
    expect(response).to.have.status(404);
  });

  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').delete('/users/{user_id}').set({}).send({});
    expect(response).to.have.status(500);
  });

});
describe('POST /login', function() {
  it('should return status 200', async function() {
    let response = await chai.request('http://localhost:3333').post('/login').set({}).send({});
    expect(response).to.have.status(200);
  });

  it('should return status 400', async function() {
    let response = await chai.request('http://localhost:3333').post('/login').set({}).send({});
    expect(response).to.have.status(400);
  });

  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').post('/login').set({}).send({});
    expect(response).to.have.status(500);
  });

});
describe('POST /logout', function() {
  it('should return status 200', async function() {
    let response = await chai.request('http://localhost:3333').post('/logout').set({}).send({});
    expect(response).to.have.status(200);
  });

  it('should return status 401', async function() {
    let response = await chai.request('http://localhost:3333').post('/logout').set({}).send({});
    expect(response).to.have.status(401);
  });

  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').post('/logout').set({}).send({});
    expect(response).to.have.status(500);
  });

});
describe('GET /articles', function() {
  it('should return status 200', async function() {
    let response = await chai.request('http://localhost:3333').get('/articles').set({}).send({});
    expect(response).to.have.status(200);
  });

  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').get('/articles').set({}).send({});
    expect(response).to.have.status(500);
  });

});
describe('POST /articles', function() {
  it('should return status 201', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles').set({}).send({});
    expect(response).to.have.status(201);
  });

  it('should return status 400', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles').set({}).send({});
    expect(response).to.have.status(400);
  });

  it('should return status 401', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles').set({}).send({});
    expect(response).to.have.status(401);
  });

  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles').set({}).send({});
    expect(response).to.have.status(500);
  });

});
describe('GET /articles/{article_id}', function() {
  it('should return status 200', async function() {
    let response = await chai.request('http://localhost:3333').get('/articles/{article_id}').set({}).send({});
    expect(response).to.have.status(200);
  });

  it('should return status 404', async function() {
    let response = await chai.request('http://localhost:3333').get('/articles/{article_id}').set({}).send({});
    expect(response).to.have.status(404);
  });

  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').get('/articles/{article_id}').set({}).send({});
    expect(response).to.have.status(500);
  });

});
describe('DELETE /articles/{article_id}', function() {
  it('should return status 200', async function() {
    let response = await chai.request('http://localhost:3333').delete('/articles/{article_id}').set({}).send({});
    expect(response).to.have.status(200);
  });

  it('should return status 401', async function() {
    let response = await chai.request('http://localhost:3333').delete('/articles/{article_id}').set({}).send({});
    expect(response).to.have.status(401);
  });

  it('should return status 404', async function() {
    let response = await chai.request('http://localhost:3333').delete('/articles/{article_id}').set({}).send({});
    expect(response).to.have.status(404);
  });

  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').delete('/articles/{article_id}').set({}).send({});
    expect(response).to.have.status(500);
  });

});
describe('PATCH /articles/{article_id}', function() {
  it('should return status 200', async function() {
    let response = await chai.request('http://localhost:3333').patch('/articles/{article_id}').set({}).send({});
    expect(response).to.have.status(200);
  });

  it('should return status 400', async function() {
    let response = await chai.request('http://localhost:3333').patch('/articles/{article_id}').set({}).send({});
    expect(response).to.have.status(400);
  });

  it('should return status 401', async function() {
    let response = await chai.request('http://localhost:3333').patch('/articles/{article_id}').set({}).send({});
    expect(response).to.have.status(401);
  });

  it('should return status 404', async function() {
    let response = await chai.request('http://localhost:3333').patch('/articles/{article_id}').set({}).send({});
    expect(response).to.have.status(404);
  });

  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').patch('/articles/{article_id}').set({}).send({});
    expect(response).to.have.status(500);
  });

});
describe('GET /articles/{article_id}/comments', function() {
  it('should return status 200', async function() {
    let response = await chai.request('http://localhost:3333').get('/articles/{article_id}/comments').set({}).send({});
    expect(response).to.have.status(200);
  });

  it('should return status 404', async function() {
    let response = await chai.request('http://localhost:3333').get('/articles/{article_id}/comments').set({}).send({});
    expect(response).to.have.status(404);
  });

  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').get('/articles/{article_id}/comments').set({}).send({});
    expect(response).to.have.status(500);
  });

});
describe('POST /articles/{article_id}/comments', function() {
  it('should return status 201', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles/{article_id}/comments').set({}).send({});
    expect(response).to.have.status(201);
  });

  it('should return status 400', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles/{article_id}/comments').set({}).send({});
    expect(response).to.have.status(400);
  });

  it('should return status 401', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles/{article_id}/comments').set({}).send({});
    expect(response).to.have.status(401);
  });

  it('should return status 404', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles/{article_id}/comments').set({}).send({});
    expect(response).to.have.status(404);
  });

  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles/{article_id}/comments').set({}).send({});
    expect(response).to.have.status(500);
  });

});
describe('DELETE /comments/{comment_id}', function() {
  it('should return status 200', async function() {
    let response = await chai.request('http://localhost:3333').delete('/comments/{comment_id}').set({}).send({});
    expect(response).to.have.status(200);
  });

  it('should return status 401', async function() {
    let response = await chai.request('http://localhost:3333').delete('/comments/{comment_id}').set({}).send({});
    expect(response).to.have.status(401);
  });

  it('should return status 404', async function() {
    let response = await chai.request('http://localhost:3333').delete('/comments/{comment_id}').set({}).send({});
    expect(response).to.have.status(404);
  });

  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').delete('/comments/{comment_id}').set({}).send({});
    expect(response).to.have.status(500);
  });

});
