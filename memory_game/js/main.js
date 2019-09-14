console.log("Up and running!");

var cards = ["queen", "king", "queen", "king"];

var cardsInPlay = [];

function checkForMatch() {

  if (cardsInPlay[0] === cardsInPlay[1])
}
console.log("You Found a Match");
}  else {
  console.log("Sorry, Try Again");
}
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
