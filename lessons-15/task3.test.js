const axios = require('axios');

async function getUser(id) {
  try {
    const response = await axios.get(`/users/${id}`);
    return response.data;
  } catch (e) {
    return { error: true, message: e.message };
  }
}

//виконано на основі інформації з гугла=)
// Автоматично замокуємо axios
jest.mock('axios');

describe('Mocking Axios requests with Jest', () => {

  test('should return user data when request succeeds', async () => {
    const mockData = { id: 1, name: 'Test User' };

    axios.get.mockResolvedValue({ data: mockData });

    const result = await getUser(1);

    expect(result).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith('/users/1');
  });

  test('should return error object when request fails', async () => {
    axios.get.mockRejectedValue(new Error('Network error'));

    const result = await getUser(1);

    expect(result.error).toBe(true);
    expect(result.message).toBe('Network error');
  });
});