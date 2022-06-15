function add(n1: number, n2: number, printType: boolean, phrase: string) {
  // if (typeof n1 !== 'number' && typeof n2 !== 'number') {
  //   throw new Error("Invalid Input!")
  // }
  const res = n1 + n2
  if (printType === true) {
    console.log(phrase + res)
  } else {
    return n1 + n2;
  }
}

const num1 = 17;
const num2 = 13.4
const printResult = true
const resultPhrase = "the result is: "

add(num1, num2, printResult, resultPhrase)