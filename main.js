// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let heartStates = {
  EMPTY_HEART: FULL_HEART,
  FULL_HEART: EMPTY_HEART
};

let colorStates = {
  "red": "",
  "": "red"
};

let commentHearts = document.querySelectorAll(".like");

function commentHeartCallback(event) {
  let currHeart = event.target;
  
  mimicServerCall("aUrl")
    .then(function(serverMessage){
       currHeart.innerText = heartStates[currHeart.innerText];
       currHeart.style.color = colorStates[currHeart];
    })
    .catch(function(error) {
      alert("Something went wrong with the like!");
    });
}

for (let state of heartStates) {
  state.addEventListener("click", commentHeartCallback);
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
