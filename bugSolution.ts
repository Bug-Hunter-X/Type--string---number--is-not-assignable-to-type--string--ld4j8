function greeter(person: string): string {
  return "Hello, " + person;
}

let user = "Jane User";

console.log(greeter(user));

//Alternatively, you can type the parameter as string | number[] to handle different input:

function greeter2(person: string | number[]): string | string[] {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return person.map(p => "Hello, " + p);
  }
}

let userArray = ["Jane", "User"];
console.log(greeter2(userArray));

let userName = "Jane User";
console.log(greeter2(userName));