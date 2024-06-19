// function addNums(a, b) {
//   return a + b;
// }

// function tripler(a) {
//   return 3 * a;
// }

// const x = addNums(3, 4);
// console.log(tripler(x));

// object with a field called name

// const obj = {
//   name: 'Kentaro',
//   hello() {
//     console.log(`Hello, I'm ${this.name}`);
//   },
// };

// obj.hello();

// console log hi

function greeting(name) {
  console.log(`Hi ${name}`);
}

// returns an object with your personal info

function returnMyObject(first, last, agee) {
  const obj = {
    firstName: first,
    lastName: last,
    age: agee,
    hello(name) {
      return `Hello ${name}.  My name is ${this.firstName}`;
    },
  };
  return obj;
}

const person = returnMyObject('cindy', 'liu', 30);
console.log(person.hello('xyz'));

// Create a function outside that takes a number (call it number1).
// That function should return a function inside that also takes a number
// (call it number2). The second function (inside) should add number1 and
// number2 and return the sum.

// function inside(number2) {
//   return 3 * a;
// }
