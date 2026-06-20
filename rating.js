let image = document.querySelector('.star-icon');
let ratings = document.querySelectorAll('.button');
let submitButton = document.querySelector('.submit-button');

let userRating = '';
ratings.forEach(rating => {
  rating.addEventListener('click', (event) => {
    userRating = rating.innerText;
  });
});

submitButton.addEventListener('click', function (event) {
  image.setAttribute('src', 'assets/illustration-thank-you.svg');
  changeHeader();
  changeDescription();
  removeRating();
  displayUserRating();
});

function changeHeader ( ){
  let header = document.querySelector('.survey-question');
  header.innerText = 'Thank you!'
}

function changeDescription ( ){
  let description = document.querySelector('.survey-description');
  description.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
}

function removeRating ( ){
  let buttons = document.querySelector('.buttons');
  buttons.remove( );
}

function displayUserRating() {
  let userRatingClass = document.querySelector('.user');
  userRatingClass.classList.add('user-rating')
  userRatingClass.innerText = `You selected ${userRating} out of 5`;
}