type combinable = number | string;
type conversionFormat = 'as-number' | 'as-text';

function combine(
  input1: combinable, 
  input2: combinable,
  resultConversion: conversionFormat
  ) {
  
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString()
  }
  return result;

  // if (resultConversion === "as-number") {
  //   return +result;
  // } else {
  //   return result.toString()
  // }
}

const combinedNums = combine(10, 20, "as-number")
console.log(combinedNums)

const combinedStringNum = combine('10', '20', "as-text")
console.log(combinedStringNum)

const combinedString = combine("hello", "world", "as-text")
console.log(combinedString)