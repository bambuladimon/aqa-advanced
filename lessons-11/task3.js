const urlTodo = 'https://jsonplaceholder.typicode.com/todos/1'
const urlUsers = 'https://jsonplaceholder.typicode.com//users/1'


async function getTodos(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function getUsers(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

Promise.all([getTodos(urlTodo), getUsers(urlUsers)]).then((values) => {
    console.log(values); 
});