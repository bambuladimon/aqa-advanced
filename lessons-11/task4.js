const urlTodo = 'https://jsonplaceholder.typicode.com/todos/1'
const urlUsers = 'https://jsonplaceholder.typicode.com//users/1'

class GetDotos {
  async getTodo() {
    const response = await fetch(urlTodo);
    if (!response.ok) throw new Error("Помилка при отриманні TODO");
    return await response.json();
  }
}

class GetUsers {
  async getUser() {
    const response = await fetch(urlUsers);
    if (!response.ok) throw new Error("Помилка при отриманні USER");
    return await response.json();
  }
}

async function run() {
  const newTodo = new GetDotos();
  const newUser = new GetUsers();

  try {
    const [todo, user] = await Promise.all([
      newTodo.getTodo(),
      newUser.getUser(),
    ]);
    console.log("Результати з класів за допомогою Promise.all:");
    console.log({ todo, user });

    const first = await Promise.race([
      newTodo.getTodo(),
      newUser.getUser(),
    ]);
    console.log("Перший виконаний проміс за допомогою Promise.race:", first);
  } catch (error) {
    console.error("Помилка:", error);
  }
}

run();