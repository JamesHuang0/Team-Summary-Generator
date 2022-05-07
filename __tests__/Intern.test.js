const Intern = require('../lib/Intern');

test('Creates intern object', () => {
    const employee = new Intern('John Doe', 123456, 'johndoe@gmail.com', 'SMU');

    expect(employee.name).toBe("John Doe");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
})

test('Checking all methods of intern class', () => {
    const employee = new Intern('John Doe', 123456, 'johndoe@gmail.com', 'SMU');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getID()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getSchool()).toBe(employee.school);
    expect(employee.getRole()).toBe('Intern');
})