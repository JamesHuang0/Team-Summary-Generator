const Manager = require('../lib/Manager');

test('Creates manager object', () => {
    const employee = new Manager('John Doe', 123456, 'johndoe@gmail.com', 1);

    expect(employee.name).toBe("John Doe");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.officeNumber).toEqual(expect.any(Number));
})

test('Checks all methods for Manager class', () => {
    const employee = new Manager('John Doe', 123456, 'johndoe@gmail.com', 1);

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getID()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getOffice()).toBe(employee.officeNumber);
    expect(employee.getRole()).toBe('Manager');
})