// variable hoisting

// console.log(age);
// console.log(cool);

// js hoists variable declarations, but not hoist actual setting of the values

const age = 10;

/* what does this file do */

// console.log('it works');

// hoisting will move functions to the top

sayHi();

/* how does this file do it? */

function sayHi() {
  console.log('hey!');
  console.timeLog(add(10, 2));
}

function add(a, b) {
  return a + b;
}
