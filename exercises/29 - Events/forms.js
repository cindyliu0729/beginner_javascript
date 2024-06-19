const wes = document.querySelector('.wes');

wes.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('YOU CLICKED IT');
  const shouldChangePage = confirm(
    'This website might be malicious, do you wish to proceed?',
  );
  if (shouldChangePage) {
    window.location = event.currentTarget.href;
  }
  console.log(shouldChangePage);

  //   console.log(event);
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  //   alternative
  //   event.querySelector('[name="email"]');

  //   console.log(event.currentTarget.name.value);
  //   console.log(event.currentTarget.email.value);
  //   console.log(event.currentTarget.agree.checked);
  const name = event.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('Sorry bro');
    event.preventDefault();
  }
});

console.log(signupForm.name);
// Other events
// 'keyup'
// 'keydown'
// 'focus'
// 'blur'

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}
signupForm.addEventListener('keyup', logEvent);
signupForm.addEventListener('keydown', logEvent);
signupForm.addEventListener('focus', logEvent);
signupForm.addEventListener('blur', logEvent);

const photo = document.querySelector('.photo');

function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    console.log('YOU CLICKED ON THE PHOTO');
  }
}

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);
