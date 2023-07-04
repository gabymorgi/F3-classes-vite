import { describe, expect, test } from "vitest"
import { sumClockTime } from "./sum"

// describe sirve para agrupar tests y darles un nombre
describe("test clock time sum", () => {
  // test sirve para definir un test lol, la idea es que el nombre sea especifico
  test("1 + 2 = 3", () => {
    // siempre que se haga un test se debe usar expect
    // lo que esta detras es un matcher, en este caso toBe
    // hay muchos matchers, se pueden ver en la documentacion de vitest, les va a encantar (ironia)
    // vean los links del readme
    const value = sumClockTime(1, 2)
    expect(value).toBe(3)
  })
  
  test("6 + 8 = 2", () => {
    const value = sumClockTime(6, 8)
    expect(value).toBe(2)
  })
})
