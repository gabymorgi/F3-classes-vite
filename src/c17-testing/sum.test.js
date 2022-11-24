import { describe, expect, test } from "vitest"
import { numberToRoman } from "./sum"

describe("test number to roman", () => {
  test("number 1 return I", () => {
    const returnValue = numberToRoman(1)
    expect(returnValue).toBe("I")
  })
  
  test("number 2 return II", () => {
    const returnValue = numberToRoman(2)
    expect(returnValue).toBe("II")
  })
  
  test("number 4 return IV", () => {
    const returnValue = numberToRoman(4)
    expect(returnValue).toBe("IV")
  })
  
  test("number 14 return XIV", () => {
    const returnValue = numberToRoman(14)
    expect(returnValue).toBe("XIV")
  })
})
