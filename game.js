

function computerPlay(){

  //Redefine function that matches numbers like | 1 = Paper | 2 = Scissors | 3 = Rock |
  return Math.floor(Math.random()*3);
}

function playerPlay(){
  let playerInput = prompt("Please enter your choice: Paper, Scissors, Rock")
  let playerChoice;

  switch (playerInput) {
    case "Paper":
        playerChoice = 1;
      break;
    case "Scissors":
      playerChoice = 2;
      break;
    case "Rock":
      playerChoice = 3;
    default:
      alert("Wrong choice / Typo");
  }
  return playerChoice;
}

function playRound(playerSelection, computerSelection)
{
  let playerWins = false;

  if(playerSelection===computerSelection){
    console.log("Draw!");
  }

  if((computerSelection===1 && playerSelection===3)||(computerSelection===2 && playerSelection===1))
  {
    playerWins = false;
  }else {
    playerWins = True;
  }
  return playerWins;
}

function game(){

  let objects = ["Paper","Scissors","Rock"];

  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 4; i++) {

    if (playRound(playerPlay(),computerPlay())) {
      return console.log("You win!" + objects[playerSelection-1] + "beats " + objects[computerSelection-1]);

    }else {
      return console.log("You lose!" + objects[computerSelection-1] + "beats " + objects[playerSelection-1]);
    }
  }

  if(playerScore>computerScore)
  {
    console.log("Winner!");
  }else{
    console.log("Loser :(");
  }

}
