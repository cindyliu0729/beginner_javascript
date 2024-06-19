// function definition

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // function body
  console.log('running calculate bill!');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  // console.log(total);
  return total;
}

// function call for **run**
const myTotal = calculateBill(100, 0.13);
const myTotal2 = calculateBill(200, 0.13);
console.log(myTotal, myTotal2);

// console.log('Your Total is $${myTotal}');
// console.log('Your Total is $${calculateBill()}');
// console.log(myTotal);

function sayHiTo(firstName) {
  return 'Hello ${firstName}';
}

// const greeting = sayHiTo();
// console.log(greeting);

function doctorize(name) {
  return 'Dr. ${name}';
}

function yell(name = 'Silly Goose') {
  return 'HEY ${name.toUpperCase()}';
}

const myBill4 = calculateBill(100, undefined, 0.2); // use the default for tax, but not tip
