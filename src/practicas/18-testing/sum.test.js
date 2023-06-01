import { describe, expect, test } from "vitest"
import { sumClockTime } from "./sum"

describe("test clock time sum", () => {
  test("1 + 2 = 3", () => {
    const value = sumClockTime(1, 2)
    
    expect(value).toBe(3)
  })
  
  test("6 + 8 = 2", () => {
    const value = sumClockTime(6, 8)
    expect(value).toBe(2)
  })
})
