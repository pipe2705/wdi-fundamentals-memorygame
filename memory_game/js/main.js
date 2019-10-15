console.log("Up and running!");

let cards = ["queen", "queen", "king", "king"];

let cardsInPlay = [];

function checkForMatch(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("you found a match!");
  } else {
    console.log("sorry try again");
  }
}

function flipCard(cardId){
checkForMatch();  
console.log("user flipped " + cards[cardId])
  cardsInPlay.push(cards[cardId])

    
  //if (cardsInPlay.length === 2)
    //console.log(true);
}
flipCard(0);
flipCard(2);





/*
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
*/
