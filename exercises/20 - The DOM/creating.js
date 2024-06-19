// If you want to create html in js, multiple ways:

//  Main way to create

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');

console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/400x400';
myImage.alt = 'Nice photo';

console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');

console.log(myParagraph);

// How to add it to page?

// document.body.appendChild(myDiv); // Put this at the end to minimize reloads of page
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

// Eg:  How do we add something to the top like a heading?

const heading = document.createElement('h2');
heading.textContent = 'Cool Things';
// myDiv.appendChild(heading);  // adds to bottom- instead:

myDiv.insertAdjacentElement('afterbegin', heading);

// Eg.  How do create a list and inject into dom

// this does not work hmm

// const listy = document.createElement('ul');
// const listyElement = document.createElement('li');

// listyElement.textContent = 'One';
// listy.appendChild(listyElement);

// listyElement.textContent = 'Two';
// listy.appendChild(listyElement);

// listyElement.textContent = 'Three';
// listy.appendChild(listyElement);

// document.body.insertAdjacentElement('afterbegin', listy);

const list = document.createElement('ul');
const li = document.createElement('li');

li.textContent = 'three';
list.appendChild(li);

document.body.insertAdjacentElement('afterbegin', list);

const li5 = document.createElement('li');
li5.textContent = 'Five';
list.appendChild(li5);

const li1 = li5.cloneNode(true); // pass true so that it will clone text as well?
li1.textContent = 'one';
list.insertAdjacentElement('afterbegin', li1);

const li4 = document.createElement('li');
li4.textContent = 'four';
li5.insertAdjacentElement('beforebegin', li4);

const li2 = document.createElement('li');
li2.textContent = 'two';
li1.insertAdjacentElement('afterend', li2);
