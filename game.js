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

  alert("Computer plays = " + objects[computerSelection-1]);
  alert("Player plays = " + objects[playerChoice-1]);

  if(playerChoice===computerSelection){
    return "Draw!";
  }

  if((computerSelection===1 && playerChoice===3)||(computerSelection===2 && playerChoice===1)||(computerSelection===3 && playerChoice===2))
  {
    computerScore++;
    return "You lose! " + objects[computerSelection-1] + " beats " + objects[playerChoice-1];
  }else {
    playerScore++;
    return "You win! " + objects[playerChoice-1] + " beats " + objects[computerSelection-1];
  }
}

function game(){

  alert("Hey! Let's play a five round paper, scissors, rock match");

  for (let i = 0; i < 5; i++) {
    let playerInput = prompt("Please enter any choice between Paper, Scissors, Rock");
    playerInputLowerCase = playerInput.toLowerCase();
    alert(playRound(playerInputLowerCase, computerPlay()));
    alert("Player score: " + playerScore + " Computer score: " + computerScore);
  }

  if (playerScore>computerScore) {
    alert("You win the game!");
  }else {
    alert("You've lost :(");
  }
}

game();
