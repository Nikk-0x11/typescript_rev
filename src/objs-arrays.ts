// const ADMIN = 0;
// const READ_AND_WRITE = 1;
// const READ_ONLY = 2;

// if we assign a new value to first then it increments other numbers according to it
// we can also set string identifiers
enum Role { 
  ADMIN, 
  READ_AND_WRITE, 
  READ_ONLY
};

const person: {
  name: string
  age: number
  hobbies: string[]
  role: number
} = {
// const person = {
  name: "Joe",
  age: 20,
  hobbies: ["Coding", "Gaming", "Music"],
  role: Role.READ_ONLY
}

// person.role.push("admin")
// person.role[1] = 10;

// this is not allowed
// person.role = [];

// this is allowed cuz this is the same structure that we've defined above
// person.role = [20, 'admin']

if (person.role === Role.READ_ONLY) {
  console.log('read only user!')
}

console.log(`name: ${person.name}, age: ${person.age}`)

for (const hobby of person.hobbies) {
  console.log(`hobby: ${hobby.toUpperCase()}`)
}