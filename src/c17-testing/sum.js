export function numberToRoman(number) {
  const romanNumbers = [
    { number: 1000, roman: "M" },
    { number: 900, roman: "CM" },
    { number: 500, roman: "D" },
    { number: 400, roman: "CD" },
    { number: 100, roman: "C" },
    { number: 90, roman: "XC" },
    { number: 50, roman: "L" },
    { number: 40, roman: "XL" },
    { number: 10, roman: "X" },
    { number: 9, roman: "IX" },
    { number: 5, roman: "V" },
    { number: 4, roman: "IV" },
    { number: 1, roman: "I" },
  ]

  let roman = ""

  for (let i = 0; i < romanNumbers.length; i++) {
    while (number >= romanNumbers[i].number) {
      roman += romanNumbers[i].roman
      number -= romanNumbers[i].number
    }
  }

  return roman
}
