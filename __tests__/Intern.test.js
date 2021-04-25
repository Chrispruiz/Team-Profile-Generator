const Intern = require('../lib/Intern');

test('Can set school', () => {
  const testValue = 'UT';
  const e = new Intern('123', 1, 'Chrispruiz@test.com', testValue);
  expect(e.school).toBe(testValue);
});

test('getRole() returns \"Intern\"', () => {
  const testValue = 'Intern';
  const e = new Intern('123', 1, 'Chrispruiz@test.com', 'UT');
  expect(e.getRole()).toBe(testValue);
});

test('Gets school via getSchool()', () => {
  const testValue = 'UT';
  const e = new Intern('123', 1, 'Chrispruiz@test.com', testValue);
  expect(e.getSchool()).toBe(testValue);
});