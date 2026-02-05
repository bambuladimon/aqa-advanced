const users = [
  { id: 1, name: "Анна", age: 25 },
  { id: 2, email: "ivan@test.com" },
  { id: 3, name: "Юра" },
  { id: 4 },
  { id: 5, name: "Катя", email: "katya@test.com" }
];

for (const { 
  id, 
  name = "Невідоме ім'я", 
  email = "email відсутній", 
  age = "вік не вказано" 
} of users) {
  console.log({ id, name, email, age });
}