const image = document.querySelector('.star-icon');
const ratings = document.querySelectorAll('.button');
const submitButton = document.querySelector('.submit-button');
let button = document.querySelectorAll('.button');

let userRating = '';
ratings.forEach(rating => {
  rating.addEventListener('click', (event) => {
    userRating = rating.innerText;
  });
});

button.forEach(btn => {
  btn.addEventListener('click', function (event) {
    btn.style.color = 'black';
    btn.style.backgroundColor = 'hsl(0, 100%, 100%)';
  })
})

submitButton.addEventListener('click', function (event) {
  image.setAttribute('src', 'assets/illustration-thank-you.svg');
  image.style.backgroundColor = 'hsl(216, 12%, 8%)';
  changeHeader( );
  changeDescription( );
  removeRating( );
  removeSubmitButton( );
  displayUserRating( );
  adjustContainer( );
});

function changeHeader ( ){
  let header = document.querySelector('.survey-question');
  header.innerText = 'Thank you!'
}

function changeDescription ( ){
  let description = document.querySelector('.survey-description');
  description.style.textAlign = 'center';
  description.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
}

function removeRating ( ){
  let buttons = document.querySelector('.buttons');
  buttons.remove( );
}

function removeSubmitButton ( ){
  let submitButton = document.querySelector('.submit-button');
  submitButton.remove( );
}

function displayUserRating( ) {
  let userRatingClass = document.querySelector('.user');
  userRatingClass.classList.add('user-rating')
  userRatingClass.innerText = `You selected ${userRating} out of 5`;
}

function adjustContainer() {
  let container = document.querySelector('.container');
  container.style.height = '450px';
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.justifyContent = 'center';
  container.style.alignItems = 'center';
  container.style.padding = '30px';
}

