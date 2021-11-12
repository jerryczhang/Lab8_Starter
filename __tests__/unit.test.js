// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// isPhoneNumber
test('isPhoneNumber true 1', () => {
  expect(functions.isPhoneNumber('(123)456-7890')).toBe(true);
})

test('isPhoneNumber true 2', () => {
  expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
})

test('isPhoneNumber false 1', () => {
  expect(functions.isPhoneNumber('1234567890')).toBe(false);
})

test('isPhoneNumber false 2', () => {
  expect(functions.isPhoneNumber('1234-5-67890')).toBe(false);
})


// isEmail
test('isEmail true 1', () => {
  expect(functions.isEmail('bob@google.com')).toBe(true);
})

test('isEmail true 2', () => {
  expect(functions.isEmail('Bob123@gmail.com')).toBe(true);
})

test('isEmail false 1', () => {
  expect(functions.isEmail('bob')).toBe(false);
})

test('isEmail false 2', () => {
  expect(functions.isEmail('bob@bob@bob.com')).toBe(false);
})


// isStrongPassword
test('isStrongPassword true 1', () => {
  expect(functions.isStrongPassword('strongpassword')).toBe(true);
})

test('isStrongPassword true 2', () => {
  expect(functions.isStrongPassword('Bob123')).toBe(true);
})

test('isStrongPassword false 1', () => {
  expect(functions.isStrongPassword('joe')).toBe(false);
})

test('isStrongPassword false 2', () => {
  expect(functions.isStrongPassword('this_is_a_really_long_password')).toBe(false);
})


// isDate
test('isDate true 1', () => {
  expect(functions.isDate('11/12/2021')).toBe(true);
})

test('isDate true 2', () => {
  expect(functions.isDate('1/1/2000')).toBe(true);
})

test('isDate false 1', () => {
  expect(functions.isDate('123/3/4')).toBe(false);
})

test('isDate false 2', () => {
  expect(functions.isDate('2021/11/12')).toBe(false);
})


// isHexColor
test('isHexColor true 1', () => {
  expect(functions.isHexColor('FFFFFF')).toBe(true);
})

test('isHexColor true 2', () => {
  expect(functions.isHexColor('Fc9')).toBe(true);
})

test('isHexColor false 1', () => {
  expect(functions.isHexColor('1032')).toBe(false);
})

test('isHexColor false 2', () => {
  expect(functions.isHexColor('ABI')).toBe(false);
})