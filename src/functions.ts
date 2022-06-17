function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log(`Result: ${num}`)
}

function addAndCallback(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(10, 20))


let combinedValues: (a: number, b: number) => number;

combinedValues = add;

console.log(combinedValues(8, 8))

addAndCallback(10, 20, (result) => {
  console.log(result)
})