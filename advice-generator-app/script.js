function fetchAdvice() {
  // The total number of advices is 224
  // get a random number between 1 to 224
  let random = Math.floor(Math.random() * 223) + 1;
  // fetch the advice with random id between 1 to 224
  fetch(`https://api.adviceslip.com/advice/${random}`, {
    headers: {
      Accept: "application/json",
    },
  })
    // convert the received response from the api to json object
    .then((response) => response.json())
    // call the randomAdvice method with the response json object's slip as a parameter
    .then(res => randomAdvice(res.slip));
}

const id = document.querySelector("#adviceID");
const quote = document.querySelector("#quote");

function randomAdvice(slip) {
  // set #adviceID to fetched json object slip's id
  id.innerHTML = slip["id"];
  // set #quote to fetched json object slip's advice
  quote.innerHTML = slip["advice"];
}

const dice = document.querySelector("#rollDice");

// Call the fetchAdvice method on each click of #rollDice
dice.addEventListener("click", () => {
  fetchAdvice();
});
