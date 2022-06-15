# Typescript Rev (TypeScript revision + reference notes)

## What is TypeScript?

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor. TypeScript code converts to JavaScript, which runs anywhere JavaScript runs: In a browser, on Node.js or Deno and in your apps. TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.

## Setup

To use TypeScript on your system you'll need nodejs environment to run package. and a dependency manager (npm in my case)

after installing nodejs and npm, open powershell and use this command

```
npm install -D typescript
```

or if u prefer installing it globally on your system then

```
npm install -g typescript
```

### compiling and running hello world program

there is no rocket science in compiling TypeScript, u get a compiler to compile typescript code which then gets compiled to javascript.

**example:**

create a folder `test` and open it in your fav. code editor (vscode in my case), then create two new file named one named `index.html` and the other one named `hello.ts`

`test/index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="hello.js"></script>
  </head>
  <body></body>
</html>
```

`test/hello.ts`

```ts
console.log("hello world!)
```

after writing this don't be confused that it's a simple javascript program for hello world. open powershell and change directory to your `test` folder and run this command

```
tsc hello.ts
```

then open your **html file** in your browser and in developer console you'll see `hello world` printed means it is working

---

## Core Types

For programs to be useful, we need to be able to work with some of the simplest units of data: numbers, strings, structures, boolean values, and the like. In TypeScript, we support the same types as you would expect in JavaScript, with an extra enumeration type thrown in to help things along.

```

- number

  - 1, 13.4, -10 (all numbers, no differentiation between integers or floats)

- string

  - 'Hi', "Hi", `Hi` (all text values)

- boolean
  - true, false (just these two, no "truthy" or "falsy" values)

```

> The key difference between JS and TS is that JavaScript uses "dynamic types" (resolved at runtime), TypeScript uses "static types" (set during development)

we define types using `:` in front of variable name followed by the type

**example:**

```ts
let hello: string;
hello = "yo! I'm a string!";
console.log(hello);
```

or

```ts
let num: number;
num = 17;
console.log(num);
```

**example program:**

```ts
function add(n1: number, n2: number, printType: boolean, phrase: string) {
  // if (typeof n1 !== 'number' && typeof n2 !== 'number') {
  //   throw new Error("Invalid Input!")
  // }
  const res = n1 + n2;
  if (printType === true) {
    console.log(phrase + res);
  } else {
    return n1 + n2;
  }
}

const num1 = 17;
const num2 = 13.4;
const printResult = true;
const resultPhrase = "the result is: ";

add(num1, num2, printResult, resultPhrase);
```
