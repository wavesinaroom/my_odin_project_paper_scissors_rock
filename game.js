  function computerPlay(){

  //Redefine function that matches numbers like | 1 = Paper | 2 = Scissors | 3 = Rock |
  return Math.floor(Math.random()*3);
}

function playerPlay(){
  let playerInput = prompt("Please enter your choice: Paper, Scissors, Rock")
  let playerChoice;

  switch (playerInput) {
    case "Paper":
        playerChoice = 0;
      break;
    case "Scissors":
      playerChoice = 1;
      break;
    case "Rock":
      playerChoice = 2;
    default:
      alert("Wrong choice / Typo");
  }

  return playerChoice;
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
  }else {
    playerWins = True;
  }

  if (playerWins) {
    return console.log("You win!" + objects[playerSelection-1] + "beats " + objects[computerSelection-1]);
  }else {
    return console.log("You lose!" + objects[computerSelection-1] + "beats " + objects[playerSelection-1]);
  }
}

function game(){

}
