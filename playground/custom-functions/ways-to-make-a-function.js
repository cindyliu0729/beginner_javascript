function doctorize(firstName) {
  return `Dr. ${firstName}`;
}

// Anonymous function )function without a name

// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// Function Expression- Store a function as an expression
// functions are hoisted up (ran first), but not constant declarations

// const doctorize = function (firstName) {
//   return `Dr. ${firstName}`;
// };

// Arrow functions- shorter

const inchToCM = (inches) => inches * 2.54;
// const inchToCM = inches => inches *2.54;  //if you have one argument, you can remove ()

// const inchToCM = function(inches) {
//     return inches *2.54
// }

// function inchToCM(inches) {
//   return inches *2.54
//   // const cm = inches * 2.54;
//   // return cm;
// }

const add = (a, b = 3) => a + b;

// function add(a, b=3) {
//     const total = a + b;
//     return total;
// }

// GOTCHAS

// returning an object

// function makeABaby(first, last) {
//     const baby = {
//         name: ${first} ${last} ,
//         age: 0
//     }
//     return baby;
// }

// put the object in () so it knows it's not the function {}
// const makeABaby = (first, last) => ({name: ${first} ${last} , age: 0});

// IIFE
// Immediated Invoked Function Expression- run at the beggining without need to declare as constant

(function (age) {
  console.log('Running the Anon function');
  return `You are cool and age ${age}`;
})(10);

// Methods- function that lives inside an object

const wes = {
  name: 'wes bos',
  // Method
  sayHi() {
    console.log('Hey Wes');
    return 'Hey Wes';
  },

  // short hand method
  yellHi() {
    console.log('HEY WESS');
  },

  // same as
  // yellHi: function() {
  //     console.log('HEY WESS');
  // }

  // Arrow function
  whisperHi: () => {
    console.log('hii wes im a mouse');
  },
};

// Callback functions- a function that is passed back inside another function to call back at a later poitn in time
// Click callback
// can be declared outside of handler

const button = document.querySelector('.clickMe');
// console.log(button);

function handleClick() {
  console.log('Great Clicking!!');
}
// button.addEventListener('click', wes.yellHi);
// button.addEventListener('click', handleClick);

// can also add anon function directly

button.addEventListener('click', () => {
  console.log('Nice Job!!');
});

// Timer Callback
// setTimeout(wes.yellHi, 1000);

setTimeout(() => {
  console.log('DONE!  Time to eat');
}, 1000);
