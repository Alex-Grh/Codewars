/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
*/

/*
 function getWinner(p, c) {
  if (p === c) {
    return 'draw';
  } else if (p === 'rock') {
    if (c === 'paper') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (p === 'paper') {
    if (c === 'scissors') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (p === 'scissors') {
    if (c === 'rock') {
      return 'computer';
    } else {
      return 'player';
    }
  }
}
*/
const rps = (p1, p2) => {
   if (p1 === p2) {
     return 'Draw!';
     }
  let gameRules = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
     if (p2 === gameRules[p1]){
       return 'Player 1 won!';
     } else {
       return 'Player 2 won!';
     }
 };

//  Вариант 2

const rps = (p1, p2) => {
   if (p1 == p2)
     return 'Draw!';
     
    if (p1 == 'rock' && p2 == 'scissors') 
      return 'Player 1 won!'
    else if (p1 == 'scissors' && p2 == 'paper') 
      return 'Player 1 won!'
    else if (p1 == 'paper' && p2 == 'rock') 
      return 'Player 1 won!'
    else
      return 'Player 2 won!';
 };