describe('GET /users', function() {
  it('should return status 200', async function() {
    let response;
    try {
      response = await axios.get('http://localhost:3333/users');
    } catch (error) {
      response = error.response;
    }
    assert.equal(response.status, 200);
  });

  it('should return status 401', async function() {
    let response;
    try {
      response = await axios.get('http://localhost:3333/users');
    } catch (error) {
      response = error.response;
    }
    assert.equal(response.status, 401);
  });

  it('should return status 500', async function() {
    let response;
    try {
      response = await axios.get('http://localhost:3333/users');
    } catch (error) {
      response = error.response;
    }
    assert.equal(response.status, 500);
  });

});
describe('POST /users', function() {
  it('should return status 201', async function() {
    let response;
    try {
      response = await axios.post('http://localhost:3333/users');
    } catch (error) {
      response = error.response;
    }
    assert.equal(response.status, 201);
  });

  it('should return status 400', async function() {
    let response;
    try {
      response = await axios.post('http://localhost:3333/users');
    } catch (error) {
      response = error.response;
    }
    assert.equal(response.status, 400);
  });

  it('should return status 401', async function() {
    let response;
    try {
      response = await axios.post('http://localhost:3333/users');
    } catch (error) {
      response = error.response;
    }
    assert.equal(response.status, 401);
  });

  it('should return status 500', async function() {
    let response;
    try {
      response = await axios.post('http://localhost:3333/users');
    } catch (error) {
      response = error.response;
    }
    assert.equal(response.status, 500);
  });

});
