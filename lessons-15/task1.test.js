const axios = require('axios');

async function getBrokenData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/custom-url');
    return response.data;
  } catch (err) {
    return {
      error: true,
      message: 'Request failed',
      details: err.message
    };
  }
}

describe('Test for handling errors', () => {
  test('Handle errors and return error message', async () => {
    const result = await getBrokenData();

    expect(result.error).toBe(true);
    expect(result.message).toBe('Request failed');
    expect(result.details).toBeDefined();
  });
});