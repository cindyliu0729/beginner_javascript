// const p = document.querySelector('p');
// const divs = document.querySelectorAll('div'); // returns nodelist
// // nodelist looks like array, but it not

// const i = document.querySelectorAll('div.item');
// const heading = document.querySelector('h2');

// console.log(p);
// console.log(divs);
// console.log(i);
// console.log(heading);

// console.dir(heading); // alot of helpful properties for working with element

// console.dir(heading.textContent);
// heading.textContent = 'Wes is cool';
// console.dir(heading.textContent); // getter: returns just text

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// // pizzaList.textContent = `${pizzaList.textContent} 🍕`;
// pizzaList.insertAdjacentText('beforeend', '🍕');

// pizzaList.insertAdjacentText('afterbegin', '🍕');

// Classes!
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
pic.classList.add('round');

pic.classList.toggle('round'); // add if it isn't there, remove if it is there

console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.classList.contains('round');

pic.alt = 'cute pup'; // setter
// pic.width = 200;
console.log(pic.alt); // getter

window.addEventListener('load', () => {
  console.log(pic.naturalWidth);
}); // wait for everything to load first

// will rarely use
// don't create your own attributes in case it becaomes a real attribute down the line
pic.setAttribute('alt', 'REALLY CUTE PUP');
console.log(pic.getAttribute('alt'));

// Data Attributes- using custom attributes

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', () => {
  alert(`welcome ${custom.dataset.name} ${custom.dataset.last}`);
});
