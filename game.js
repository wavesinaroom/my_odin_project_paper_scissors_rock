let playerScore = 0;
let computerScore = 0;
let turnCount = 0;

const gameTurns = 5;
const buttons = document.querySelectorAll("button");

function addEventListenerNodes(list)
{
  for(let i = 0; i < list.length ; i++)
  {
      list[i].addEventListener("click", ()=>playRound(list[i].name, computerPlay()));
  }
}


function computerPlay(){
  //Redefine function that matches numbers like | 1 = Paper | 2 = Scissors | 3 = Rock |
  return Math.floor(Math.random()*3+1);
}

function playRound(playerSelection, computerSelection)
{
  let objects = ["Paper","Scissors","Rock"];
  let playerChoice;

  //Keeps up with turn count
  ++turnCount;

 //Computes player choice
  switch (playerSelection.toLowerCase()) {
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
    alert("Something went wrong");
  }

  //Shows moves
  alert("Computer plays = " + objects[computerSelection-1]);
  alert("Player plays = " + objects[playerChoice-1]);
  //Results
    if(playerChoice===computerSelection){
      if(turnCount==gameTurns)
      {
        endGame()
      }else{
      alert("Draw!");
    }
    return;
  }

  if((computerSelection===1 && playerChoice===3)||(computerSelection===2 && playerChoice===1)||(computerSelection===3 && playerChoice===2))
  {
    computerScore++;
    alert("You lose! " + objects[computerSelection-1] + " beats " + objects[playerChoice-1]);
    if(turnCount==gameTurns)
    {
      endGame()
    }else{
      alert("What's your next move?");
    }
    return
  }else {
    playerScore++;
    alert("You win! " + objects[playerChoice-1] + " beats " + objects[computerSelection-1]);
    if(turnCount==gameTurns)
    {
      endGame()
    }else{
    alert("What's your next move?");
  }
    return;
  }
}

function endGame()
{

  if(turnCount==gameTurns)
  {
    if (playerScore>computerScore) {
      alert("You win the game!");
      return;
    }else {
      alert("You've lost :(");
      return;
    }
  }
}

addEventListenerNodes(buttons);
alert("Hey! Wanna play paper scissors rock? Click on any choice");
