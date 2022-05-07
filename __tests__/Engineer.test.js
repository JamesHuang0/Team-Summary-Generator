const Engineer = require('../lib/Engineer');

test('Creates engineer object', () => {
  const employee = new Engineer('John Doe', 123456, 'johndoe@gmail.com', 'johndoe');

  expect(employee.name).toBe("John Doe");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.github).toEqual(expect.any(String));
})

test('Checking all methods of engineer class', () => {
  const employee = new Engineer('John Doe', 123456, 'johndoe@gmail.com', 'johndoe');

  expect(employee.getName()).toBe(employee.name);
  expect(employee.getID()).toBe(employee.id);
  expect(employee.getEmail()).toBe(employee.email);
  expect(employee.getGithub()).toBe(employee.github);
  expect(employee.getRole()).toBe('Engineer');
})
