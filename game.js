function computerPlay(){

  //Redefine function that matches numbers like | 1 = Paper | 2 = Scissors | 3 = Rock |
  return Math.floor(Math.random()*3);
}

function playRound(playerSelection, computerSelection)
{

  let objects = ["Paper","Scissors","Rock"];
  bool playerWins = false;

  if(playerSelection===computerSelection}{
    console.log("Draw!");
  }

  if((computerSelection===1 && playerSelection===3)||(computerSelection===2 && playerSelection===1))
  {
    playerWins = false;
  }else if ((computerSelection===3 && playerSelection===1)||(computerSelection===1 && playerSelection===2)) {
    playerWins = True;
  }

  if (playerWins) {
    return console.log("You win!" + objects[playerSelection-1] + "beats " + objects[computerSelection-1]);
  }else {
    return console.log("You lose!" + objects[computerSelection-1] + "beats " + objects[playerSelection-1]);
  }

}
