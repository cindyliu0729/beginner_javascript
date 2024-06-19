const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  console.log(person.name);
});

// Console Methods

// people.forEach((person, index) => {
//   // console.error(person.name); // looks red in console
//   if (person.name === 'Wes') {
//     console.warn('Dumb Name'); // yellow in console
//   }
// });

// console.table(people); // output data as nice table

// people.forEach((person, index) => {
//   console.groupCollapsed('${person.name}');
//   console.log(person.country);
//   console.log(person.cool);
//   console.log('DONE!');
//   console.groupEnd('{person.name');
// });

// Callstack or Stack Trace

// read callstack items

function greet(name) {
    doesntExist(); // will cause an error
    return `Hello ${name}`;
  }
  
  function go() {
    const name = doctorize(greet('Wes'));
    console.log(name);
  }

// Grabbing Elements

// Inspect element
// $0 returns the html that is selected
// $0.value returns the value inputted (eg. hey in search)
// $0 means last element clicked
// $1 is the second to last element clicked and so on

// $('p') used as selector- first match
// $$('p') finds all the paragraph tags

// Breakpoints- slow things down and peer into the data

// people.forEach((person, index) => {
//     debugger; //javascript paused
//     console.log(person.name);
//   });

// Scope

// Network Requests- what is being fired off

// A Dad joke fetch
async function fetchDadJoke() {
    const res = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'text/plain',
      },
    });
    const joke = await res.text();
    console.log(joke);



    return joke;
  }
  

// Network tab- see all the files that are sending and receiving requests

// Break On Attribute- how to find code in javascript that is doing this

// Break on Attribute Modification (right click)
// when attribute changes- pause


// Some Setup Code

function doALotOfStuff() {
  console.groupCollapsed('Doing some stuff'); // groups into collapsable log
  console.log('Hey Im one');
  console.warn('watch out');
  console.log('heye');
  console.groupEnd('Doing some stuff');
}

function doctorize(name) {
  // count based on what is passed in for name (new name restarts count)
  console.count('running Doctorize for ${name}'); // prints count with output
  return `Dr. ${name}`;
}

// function greet(name) {
//   doesntExist(); // will cause an error
//   return `Hello ${name}`;
// }

// function go() {
//   const name = doctorize(greet('Wes'));
//   console.log(name);
// }

const button = document.querySelector('.bigger');
button.addEventListener('click', (e) => {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
