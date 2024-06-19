const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleCLick() {
  console.log('IT GOT CLICKED');
}

const hooray = () => console.log('HOORAY');

butts.addEventListener('click', handleCLick); // handleCLick() runs it with load
coolButton.addEventListener('click', hooray);

// if in the future, you want to remove you must name the function
butts.removeEventListener('click', handleCLick);

///  Listen on Multiple Items

const buyButtons = document.querySelectorAll('button.buy');

// function buyItem() {
//   console.log('BUYING ITEM');
// }

// buyButtons.forEach((buyButton) => {
//   console.log('Binding the buy button');
//   buyButton.addEventListener('click', buyItem);
// });

// Loop every buy butoon and atttach a handler to it
// event contains all this information about what happens

function handleBuyButtonClick(event) {
  console.log('You clicked a button');
  const button = event.target;
  console.log(button.textContent);
  console.log('You are buying it!');
  console.log(parseFloat(event.target.dataset.price));

  // Returns what the specific item the user clicked on
  console.log(event.target);
  // Returns what fired the event listener- most cases we want this one
  console.log(event.currentTarget);

  // Stop thstois event from bubbling up and event listener on window doesn't fire
  // event.stopPropagation();
}

buyButtons.forEach((buyButton) => {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

// Prpogation- clicked on multiple things at the same time

window.addEventListener(
  'click',
  (event) => {
    console.log('YOU CLICKED THE WINDOW');
    console.log(event.target);

    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles); // has person called stop propogation on it or not
    // stops from porpogating downward
    // event.stopPropagation();
  },

  // order becomes top down rather than order up
  { capture: true },
);

const photoE1 = document.querySelector('.photo');

photoE1.addEventListener('mousemove', (event) => {
  console.log(event.currentTarget);
  // console.count(event.currentTarget); // counts
  // console.log(this);  // equal to whatever is the left of the dot (photoE1 in this case)
});
