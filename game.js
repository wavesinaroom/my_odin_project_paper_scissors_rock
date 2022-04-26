let playerScore = 0;
let computerScore = 0;
let turnCount = 0;

const gameTurns = 5;
const buttons = document.querySelectorAll("button");
const log = document.getElementById("game_log");
const waitMilliseconds = 1500;

function sleep(milliseconds)
{
  return new Promise(resolve=>setTimeout(resolve, milliseconds));
}

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

async function playRound(playerSelection, computerSelection)
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

  //Shows moves --> aren't shown in <p>!!
  log.innerText=("Computer plays = " + objects[computerSelection-1]);
  await sleep(waitMilliseconds);
  log.innerText=("Player plays = " + objects[playerChoice-1]);
  await sleep(waitMilliseconds);

  //Results
  if(playerChoice===computerSelection){
    if(turnCount==gameTurns)
    {
      endGame()
    }else{
      log.innerText="Draw!";
      await sleep(waitMilliseconds);
      log.innerText="What's your next move?";
    }
    return;
  }else if((computerSelection===1 && playerChoice===3)||(computerSelection===2 && playerChoice===1)||(computerSelection===3 && playerChoice===2))
  {
    computerScore++;
    log.innerText="You lose! " + objects[computerSelection-1] + " beats " + objects[playerChoice-1];
    if(turnCount==gameTurns)
    {
      endGame()
    }else{
      await sleep(waitMilliseconds);
      log.innerText="What's your next move?";
    }
    return
  }else {
    playerScore++;
    log.innerText="You win! " + objects[playerChoice-1] + " beats " + objects[computerSelection-1];
    if(turnCount==gameTurns)
    {
      endGame()
    }else{
      await sleep(waitMilliseconds);
    log.innerText="What's your next move?";
  }
    return;
  }
}

async function endGame()
{

  if(turnCount==gameTurns)
  {
    if (playerScore>computerScore) {
      await sleep(waitMilliseconds);
      log.innerText="You win the game!";
      return;
    }else {
      await sleep(waitMilliseconds);
      log.innerText="You've lost :(";
      return;
    }
  }
}

addEventListenerNodes(buttons);
log.innerText="Hey! Wanna play paper scissors rock? Click on any choice";
