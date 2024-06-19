// how to adjust function to avoid errors
// function scrollToAccept() {
//   const terms = document.querySelector('.terms-and-conditions');

//   if (!terms) {
//     return; // quit if item not on page
//   }

//   terms.addEventListener('scroll', (e) => {
//     console.log(e);
//   });
// }

// scrollToAccept();

const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    ob.unobserve(terms.lastElementChild);
    
// reactivate everytime you scroll to the bottom
//     console.log('REMOVING DISABLED');
//   } else {
//     button.disabled = true;
//   }
}

const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
});

ob.observe(terms.lastElementChild);

// terms.addEventListener('scroll', (e) => {
//   console.log(e);
// });
