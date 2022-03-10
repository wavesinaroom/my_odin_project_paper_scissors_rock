let playerScore = 0;
let computerScore = 0;

function computerPlay(){

  //Redefine function that matches numbers like | 1 = Paper | 2 = Scissors | 3 = Rock |
  return Math.floor(Math.random()*3+1);
}

function playRound(playerSelection, computerSelection)
{
  let objects = ["Paper","Scissors","Rock"];
  let playerChoice;

  switch (playerSelection) {
    case "paper":
    playerChoice = 1;
    break;
    case "scissors":
    playerChoice = 2;
    break;
    case "rock":
    playerChoice = 3;
    break;
    default:
    throw new Error("Wrong input");
    break;
  }

  console.log("****Computer plays = " + objects[computerSelection-1] + "****");
  console.log("****Player plays = " + objects[playerChoice-1]+ "****");

  if(playerChoice===computerSelection){
    return "Draw!";
  }

  if((computerSelection===1 && playerChoice===3)||(computerSelection===2 && playerChoice===1))
  {
    playerScore++;
    return "You win! " + objects[playerChoice-1] + " beats " + objects[computerSelection-1];
  }else {
    computerScore++;
    return "You lose! " + objects[computerSelection-1] + " beats " + objects[playerChoice-1];
  }
}

function game(){

  for (let i = 0; i < 5; i++) {
    let playerInput = prompt("Please enter any choice between Paper, Scissors, Rock");
    playerInputLowerCase = playerInput.toLowerCase();
    console.log(playRound(playerInputLowerCase, computerPlay()));
  }

  if (playerScore>computerScore) {
    console.log("----You win the game!----");
  }else {
    console.log("----You've lost :(----");
  }
}

game();
