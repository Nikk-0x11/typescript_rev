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

- object
  - {age: 30} (Any JavaScript object, more specific types (type of object) are possible)

- array
  - [1, 2, 3] (Any JavaScript array, type can be flexible or strict (regarding the element types))

- tuple
  - [1, 2] (An array but a fixed length array)

- enum
  - enum {NEW, OLD} (Added by typescript: automatically enumerated global constant identifiers)

- any
  - * (Any kind of value, no specific type assignment)
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
var n: number = 20;
var s: string = "Joe";
var b: boolean = true;

if (b === true) {
  console.log(`name ${s}, age ${n}`);
}
```

**example number type:**

```ts
let n: number;
n = 20;
console.log(n);
```

**example string type:**

```ts
let s: string;
s = "hello";
console.log(s);
```

**example boolean type:**

```ts
let b: boolean;
b = true;
console.log(b);
```

**example object type:**

```ts
const person: {
  name: string;
  age: number;
} = {
  // const person = {
  name: "Joe",
  age: 20,
};

console.log(`name: ${person.name}, age: ${person.age}`);
```

**example array type:**

```ts
let users: Array<string>;
users = ["User 1", "User 2", "User 3"];

let userId: Array<string>;
userId = [1, 2, 3];

console.log(users);
console.log(userId);
```

**example tuple type:**

```ts
var userId: number = 1;
var userName: string = "Joe";

var userData: [number, string] = [userId, userName];

console.log(userData);
```

**example enum type:**

```ts
enum Role {
  ADMIN = 5,
  READ_AND_WRITE = "READ_AND_WRITE",
  READ_ONLY = 10,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: number;
} = {
  // const person = {
  name: "Joe",
  age: 20,
  hobbies: ["Coding", "Gaming", "Music"],
  role: Role.READ_ONLY,
};

if (person.role === Role.READ_ONLY) {
  console.log("read only user!");
}
```

**example union type:**

```ts
let code: string | number;
code = 123; // OK
code = "ABC"; // OK
code = false; // Compiler Error

let empId: string | number;
empId = 111; // OK
empId = "E111"; // OK
empId = true; // Compiler Error
```

**example alias type:**

```ts
type inputCondition = number | string;

let id: inputCondition = 1;
let name: inputCondition = "Joe";

console.log(id, name);
```

**example void type:**

```ts
function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log(`Result: ${num}`);
}

printResult(add(10, 20));
```

**example function type:**

```ts
function add(n1: number, n2: number) {
  return n1 + n2;
}

let combinedValues: Function;
combinedValues = add;
console.log(combinedValues(8, 8));
```

**example function type with parameters:**

```ts
function addAndCallback(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndCallback(10, 20, (result) => {
  console.log(result);
});
```

**example unknown type:**

```ts
let inp: unknown;
let usrName: string;

inp = 5;
inp = "Unknown";
if (typeof inp === "string") {
  usrName = inp;
}
```

**example never type:**

```ts
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}

generateError("An Error Occurred!", 500);
```

---

### TypeScript Watch Mode

watch mode simply saved and re-compiles our typescript source file automatically. To use watch mode

```
tsc filename.ts -w
```

or

```
tsc filename.ts --watch
```
