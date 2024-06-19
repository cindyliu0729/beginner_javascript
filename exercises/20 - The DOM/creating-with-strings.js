// Creating HTML with Strings Examples

const item = document.querySelector('.item');

const width = 500;
const src = `https://source.unsplash.com/random/${width}x400`;
const desc = 'Cute pup';
const myHTML = `
    <div class="wrapper">
        <h2> Cute Pup</h2>
        <img src="${src}" alt="${desc}"/>
    </div>
`;

// item.innerHTML = myHTML;

// console.log(item.innerHTML); // getter

// // myHTML is not an element, it is a string
// // can't do things like addign classList
// // Manipulations not doable until it on the DOM and then you pull it out

// const itemImage = document.querySelector('.wrapper img');
// console.log(itemImage);

// itemImage.classList.add('round');

// How to turn a string into a DOM element
// document.createRange and document.createFragment

const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);
// console.log(myFragment.querySelector('img'));
// console.log(myFragment);

// Security

// One pitfall- people can edit their own html and you can get HACKED
