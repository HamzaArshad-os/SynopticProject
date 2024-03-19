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
    let response = await chai.request('http://localhost:3333').post('/users').set({}).send({"first_name":"in labore in id","last_name":"sunt Du","email":"yFS0SJu4OFM9@AxzvTQRyDRJIZoCQD","password":"sit tempor e"});
    expect(response).to.have.status(201);
  });
});
describe('Will create a new user in the system. ', function() {
  it('should return status 400', async function() {
    let response = await chai.request('http://localhost:3333').post('/users').set({}).send({"first_name":"culpa et","last_name":"elit","email":"9XwyDaKQbMi1hD@aJPaqLpJoiqHnKp","password":"idfugiat a"});
    expect(response).to.have.status(400);
  });
});
describe('Will create a new user in the system. ', function() {
  it('should return status 401', async function() {
    let response = await chai.request('http://localhost:3333').post('/users').set({}).send({"first_name":"aliqui","last_name":"conse","email":"jv-pKf8TtOz7Db@NfcSwDqcnJgnZpJ","password":"consectetu"});
    expect(response).to.have.status(401);
  });
});
describe('Will create a new user in the system. ', function() {
  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').post('/users').set({}).send({"first_name":"exercitation sint","last_name":"ad esse","email":"Zf86jMUUh6pNWIC@oHnRCLTAfqfkOU","password":"consequat sit Exc"});
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
    let response = await chai.request('http://localhost:3333').post('/login').set({}).send({"email":"5uUD@TYUHAbNCXtpRAhRLTVLF.khv","password":"mollit enim veniam esse"});
    expect(response).to.have.status(200);
  });
});
describe('Will log a user into their account. ', function() {
  it('should return status 400', async function() {
    let response = await chai.request('http://localhost:3333').post('/login').set({}).send({"email":"mJhbn0MWMKu@HsurOGcOivfkFqdUoC","password":"repr"});
    expect(response).to.have.status(400);
  });
});
describe('Will log a user into their account. ', function() {
  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').post('/login').set({}).send({"email":"sT8st@VUUasWg.mt","password":"dolor"});
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
    let response = await chai.request('http://localhost:3333').post('/articles').set({}).send({"title":"magna in eiusmod ","author":"conse","article_text":"dolor"});
    expect(response).to.have.status(201);
  });
});
describe('Add a new article into the system. ', function() {
  it('should return status 400', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles').set({}).send({"title":"sunt Ut commodo","author":"incididunt exer","article_text":"ut cul"});
    expect(response).to.have.status(400);
  });
});
describe('Add a new article into the system. ', function() {
  it('should return status 401', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles').set({}).send({"title":"insit veniam","author":"cupidatat ad e","article_text":"et ani"});
    expect(response).to.have.status(401);
  });
});
describe('Add a new article into the system. ', function() {
  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles').set({}).send({"title":"nostrud adip","author":"non Duis elit sin","article_text":"esse a"});
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
    let response = await chai.request('http://localhost:3333').patch('/articles/{article_id}').set({}).send({"title":"ipsum ex ad","author":"deserunt in in","article_text":"magna"});
    expect(response).to.have.status(200);
  });
});
describe('Update an article (published date will stay the same). ', function() {
  it('should return status 400', async function() {
    let response = await chai.request('http://localhost:3333').patch('/articles/{article_id}').set({}).send({"title":"Duis nisi ","author":"anim nisi nulla","article_text":"ut enim"});
    expect(response).to.have.status(400);
  });
});
describe('Update an article (published date will stay the same). ', function() {
  it('should return status 401', async function() {
    let response = await chai.request('http://localhost:3333').patch('/articles/{article_id}').set({}).send({"title":"mollit consequat","author":"utdolore","article_text":"eiusmod in elit"});
    expect(response).to.have.status(401);
  });
});
describe('Update an article (published date will stay the same). ', function() {
  it('should return status 404', async function() {
    let response = await chai.request('http://localhost:3333').patch('/articles/{article_id}').set({}).send({"title":"Excepteur ad","author":"ipsum ea","article_text":"laboris qui ex"});
    expect(response).to.have.status(404);
  });
});
describe('Update an article (published date will stay the same). ', function() {
  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').patch('/articles/{article_id}').set({}).send({"title":"qui esse dolor","author":"in labo","article_text":"ut Duis et"});
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
    let response = await chai.request('http://localhost:3333').post('/articles/{article_id}/comments').set({}).send({"comment_text":"exercitation ad qui"});
    expect(response).to.have.status(201);
  });
});
describe('Add a new comment to an article. ', function() {
  it('should return status 400', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles/{article_id}/comments').set({}).send({"comment_text":"cillu"});
    expect(response).to.have.status(400);
  });
});
describe('Add a new comment to an article. ', function() {
  it('should return status 401', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles/{article_id}/comments').set({}).send({"comment_text":"irure nisi proident"});
    expect(response).to.have.status(401);
  });
});
describe('Add a new comment to an article. ', function() {
  it('should return status 404', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles/{article_id}/comments').set({}).send({"comment_text":"sit quis anim"});
    expect(response).to.have.status(404);
  });
});
describe('Add a new comment to an article. ', function() {
  it('should return status 500', async function() {
    let response = await chai.request('http://localhost:3333').post('/articles/{article_id}/comments').set({}).send({"comment_text":"fugiat"});
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
