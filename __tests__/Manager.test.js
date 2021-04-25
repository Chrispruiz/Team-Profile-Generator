const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('Setting office number', () => {
  const testValue = 50;
  const e = new Manager('123', 1, 'Chrispruiz@test.com', testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return \"Manager\"', () => {
  const testValue = 'Manager';
  const e = new Manager('123', 1, 'Chrispruiz@test.com', 50);
  expect(e.getRole()).toBe(testValue);
});

test('Get office number via getOffice()', () => {
  const testValue = 50;
  const e = new Manager('123', 1, 'Chrispruiz@test.com', testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});