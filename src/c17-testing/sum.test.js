import { numberToRoman } from './sum'
import { test, expect } from 'vitest'

test('1 = I', () => {
  expect(numberToRoman(1)).toBe("I");
});

test('2 = II', () => {
  expect(numberToRoman(2)).toBe("II");
});

test('4 = IV', () => {
  expect(numberToRoman(4)).toBe("IV");
});

test('14 = XIV', () => {
  expect(numberToRoman(14)).toBe("XIV");
});
