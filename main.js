// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const heartBinarium = {
  '♡':'♥',
  '♥':'♡'
}
const modal = document.getElementById('modal');

// Your JavaScript code goes here!

const init = () => {
  
  [...document.getElementsByClassName('like-glyph')].forEach(element => element.addEventListener('click', e => {
    mimicServerCall()
    .then(() => {
      console.log('thru');
      return e.target.textContent = heartBinarium[e.target.textContent]
    })
    .catch((oops) => {
        modal.classList.remove('hidden');
        document.getElementById('modal-message').textContent = oops;
        setTimeout(() => {
          modal.classList.add('hidden');
        },3000);
        
    });
  }));

};

document.addEventListener('DOMContentLoaded', init);

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
