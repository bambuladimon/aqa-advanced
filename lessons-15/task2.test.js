const axios = require('axios');

async function requestWithHeaders() {
  const response = await axios.get(
    'https://demoqa.com/swagger//Account/v1/User/',
    {
      headers: {
        'X-Custom-Header': 'MyHeaderValue'
      },
      params: {
        userUid: 10
      }
    }
  );

  return response.config;
}


describe('Get user data by URL params', () => {
  test('Test with custom heders and params', async () => {
    const config = await requestWithHeaders();

    expect(config.headers['X-Custom-Header']).toBe('MyHeaderValue');
    expect(config.params.userUid).toBe(10);
  });
});