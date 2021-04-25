const Employee = require('../lib/Employee');


test('Can set name', () => {
  const name = 'Chris';
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test('Can set id', () => {
  const testValue = 50;
  const e = new Employee('123', testValue);
  expect(e.id).toBe(testValue);
});

test('Can set email', () => {
  const testValue = 'chrispruiz@test.com';
  const e = new Employee('123', 1, testValue);
  expect(e.email).toBe(testValue);
});

test('Can grab name via getName()', () => {
  const testValue = 'Chris';
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test('Can get id via getId()', () => {
  const testValue = 50;
  const e = new Employee('123', testValue);
  expect(e.getId()).toBe(testValue);
});

test('Can get email via getEmail()', () => {
  const testValue = 'Chrispruiz@test.com';
  const e = new Employee('123', 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test('Test if getRole() returns \"Employee\"', () => {
  const testValue = 'Employee';
  const e = new Employee('Chris', 1, 'Chrispruiz@test.com');
  expect(e.getRole()).toBe(testValue);
});

