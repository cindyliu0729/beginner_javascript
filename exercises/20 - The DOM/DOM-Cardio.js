// Make a div
// add a class of wrapper to it
// put it into the body

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
document.body.appendChild(myDiv);

// make an unordered list
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper

const myList = document.createElement('ul');

const li = document.createElement('li');
li.textContent = 'one';
myList.appendChild(li);

const li2 = document.createElement('li');
li2.textContent = 'two';
myList.appendChild(li2);

const li3 = document.createElement('li');
li3.textContent = 'three';
myList.appendChild(li3);

myDiv.append(myList);

/// // Atlernative
// const ul = `<ul>
//     <li>one</li>
//     <li>two</li>
//     <li>three</li>
// </ul>
// `;
// myDiv.innerHTML = myList;

// create an image
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

const img = document.createElement('img');
img.src = 'https://source.unsplash.com/random/400x400';
img.width = 250;
img.classList = 'cute';
img.alt = 'Cute Puppy';
myDiv.append(img);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
// add a class to the second paragraph called warning
// remove the first paragraph

const div = `<div class = 'mDiv'>
<p>paragraph 1</p>
<p>paragraph 2</p>
</div>
`;

const ulElement = myDiv.querySelector('ul');
ulElement.insertAdjacentHTML('beforebegin', div);

// two ways
const d = myDiv.querySelector('.mDiv');
d.children[1].classList.add('warning');

d.firstElementChild.remove();
// console.log(d.children);

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//  <h2>NAME — AGE</h2>
//  <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  const html = `
    <div class="playerCard">
        <h2>${name} — ${age}</h2>
        <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
        <button class="delete" type = "button"> &times; Delete</button>
    </div>
    `;
  return html;
}

// make a new div with a class of cards
// make 4 player cards using generatePlayerCard
// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

const cards = document.createElement('div');
cards.classList.add('cards');

const p1 = generatePlayerCard('a', 1, 1);
const p2 = generatePlayerCard('b', 2, 2);
const p3 = generatePlayerCard('c', 3, 3);
const p4 = generatePlayerCard('d', 4, 4);

// Can't use cards.append bc it will wppend the string
// beforeend adds inside the element after the last child
cards.insertAdjacentHTML('beforeend', p1);
cards.insertAdjacentHTML('beforeend', p2);
cards.insertAdjacentHTML('beforeend', p3);
cards.insertAdjacentHTML('beforeend', p4);

console.log(cards);

myDiv.insertAdjacentElement('beforebegin', cards);

// select all the buttons!
// make out delete function
// loop over them and attach a listener

const buttons = document.querySelectorAll('.delete');

function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  buttonThatGotClicked.parentElement.remove(); // find out parent div
  // alt that works even if you move where the button lives!
  // buttonThatGotClicked.closest('.playerCard').remove()
}
buttons.forEach((button) => button.addEventListener('click', deleteCard));
