const Engineer = require('../lib/Engineer');

test('GitHUb account', () => {
  const testValue = 'GitHubUserName';
  const e = new Engineer('123', 1, 'Chrispruiz@test.com', testValue);
  expect(e.github).toBe(testValue);
});
test('Get GitHub username via getGithub()', () => {
    const testValue = 'GitHubUserName';
    const e = new Engineer("123", 1, 'Chrispruiz@test.com', testValue);
    expect(e.getGithub()).toBe(testValue);
  });
test('getRole() returns \"Engineer\"', () => {
  const testValue = 'Engineer';
  const e = new Engineer('123', 1, 'Chrispruiz@test.com', 'GitHubUserName');
  expect(e.getRole()).toBe(testValue);
});

