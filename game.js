

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
  }else {
    return "You lose! " + objects[computerSelection-1] + " beats " + objects[playerChoice-1];
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
