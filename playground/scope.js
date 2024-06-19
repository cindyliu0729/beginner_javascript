// first acts as a global variable and can be accessed in html

// /* eslint-disable*/
// const first = 'wes';
// let second = 'bos';
// var age = 100;  // var variable attached to window object

// function sayHi() {
//     console.log('hi');
// }

// variables defined in function only exist within function
const age = 100;

// function go() {
//   const hair = 'blonde';
// }

// go();

// console.log(age);
// console.log(hair);

// function isCool(name) {
//   let cool;
//   if (name === 'wes') {
//     cool = true;
//   }

//   console.log(cool);
//   return cool;
// }

// var variable is function scope, let and const are block scope

// function isCool(name) {
//   if (name === 'wes') {
//     var cool = true;
//   }

//   console.log(cool);
//   return cool;
// }

const dog = 'snickers';

function logDog() {
  console.log(dog);
}

function go() {
  const dog = 'sunny';
  logDog();
}

// lexically scoped language/ static scope
// scope happens when variable is defined, not when it is run

// function scoping

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }

  yell();
}
