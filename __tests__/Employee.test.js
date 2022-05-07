const Employee = require("../lib/Employee");

test('Creates employee object', () => {
    const employee = new Employee("John Doe", 123456, 'johndoe@gmail.com');

    expect(employee.name).toBe("John Doe");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('Checking all methods of employee class', () => {
    const employee = new Employee("John Doe", 123456, 'johndoe@gmail.com');
    
    expect(employee.getName()).toBe(employee.name);
    expect(employee.getID()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');
})

