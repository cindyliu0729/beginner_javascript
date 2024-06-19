console.log('it works');

// Traversing means going up/ down/ over
// eg. workign with a button and need to grab it's parent div
// eg. looking inside a button for all elements

const wes = document.querySelector('.wes');

// Element Properties
// console.log(wes.children); // select elements- only get elements tag
// console.log(wes.firstElementChild);
// console.log(wes.lastElementChild);
// console.log(wes.previousElementSibling);
// console.log(wes.nextElementSibling);
// console.log(wes.parentElement);

// console.log(wes.childNodes); // select node- get all pieces

// Nodes Properties- gives you text nodes as well

// el.childNodes
// el.firstElementChild
// el.lastChild
// el.previousElementSibling
// el.nextElementSibling
// el.parentNode

// Removing Elements

// if you create it, object still exists in memory

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();

console.log(p);
