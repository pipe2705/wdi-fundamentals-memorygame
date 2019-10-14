console.log("Up and running!");

let cards = ["queen", "queen", "king", "king"];

let cardsInPlay = [];

let cardOne = cards[0];

cardsInPlay.push(cardOne);
console.log( "User flipped" + " " + cardsInPlay)

let cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log( "User flipped" + " " + cardsInPlay[1]);

//if (cardsInPlay.length === 2)
//console.log(true);

if (cardsInPlay[0] === cardsInPlay[1])

alert("you found a match!");
else alert("sorry try again");



function checkForMatch() {

  if (cardsInPlay[0] === cardsInPlay[1])

console.log("You Found a Match");
 else 
  console.log("Sorry, Try Again");
}


 function flipCard(cardId){
flipCard(0);
flipCard(2);

console.log("user flipped" + cards[cardId]);
cardsInPlay.push(cards[cardId]);

 if (cardsInPlay.length === 2) {
   checkForMatch();
 }
}
