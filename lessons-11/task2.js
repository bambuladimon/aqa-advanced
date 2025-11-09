const urlTodo = 'https://jsonplaceholder.typicode.com/todos/1'
const urlUsers = 'https://jsonplaceholder.typicode.com//users/1'
// 
function getTodos() {
  return fetch(urlTodo)
    .then((response) => {
      if (!response.ok) throw new Error("Помилка при отриманні TODO");
      return response.json();
    })
    .catch((error) => console.error(error));
}

function getUsers() {
  return fetch(urlUsers)
    .then((response) => {
      if (!response.ok) throw new Error("Помилка при отриманні USER");
      return response.json();
    })
    .catch((error) => console.error(error));
}

Promise.all([getTodos(), getUsers()])
  .then(([todo, user]) => {
    console.log("Результат виконання Promise.all:");
    console.log({ todo, user });
  })
  .catch((error) => console.error("Помилка у Promise.all:", error));

Promise.race([getTodos(), getUsers()])
  .then((firstResult) => {
    console.log("Перший виконаний проміс за допомогою Promise.race:", firstResult);
  })
  .catch((error) => console.error("Помилка у Promise.race:", error));