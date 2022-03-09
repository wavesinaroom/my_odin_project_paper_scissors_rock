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
    alert("Invalid choice");
  }
  if(playerChoice===computerSelection){
    return "Draw!";
  }

  if((computerSelection===1 && playerChoice===3)||(computerSelection===2 && playerChoice===1))
  {
    return "You win! " + objects[playerChoice-1] + " beats " + objects[computerSelection-1];
    playerScore++;
  }else {
    return "You lose! " + objects[computerSelection-1] + " beats " + objects[playerChoice-1];
    computerScore++;
  }
}

function game(){

  for (let i = 0; i < 4; i++) {
    let playerInput = prompt("Please enter any choice between Paper, Scissor, Rock");
    console.log(playRound(playerInput.toLowerCase(), computerPlay()));
  }

  if (playerScore>computerScore) {
    console.log("You win the game!");
  }else {
    console.log("You've lost :(");
  }

}
