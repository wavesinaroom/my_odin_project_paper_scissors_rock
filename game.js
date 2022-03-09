

function computerPlay(){

  //Redefine function that matches numbers like | 1 = Paper | 2 = Scissors | 3 = Rock |
  return Math.floor(Math.random()*3);
}

function playRound(playerSelection, computerSelection)
{
  let objects = ["Paper","Scissors","Rock"];
  let playerInput = prompt("Please enter your choice: Paper, Scissors, Rock")
  let playerChoice;

  switch (playerInput.toLowercase()) {
    case "paper":
    playerChoice = 1;
    break;
    case "scissors":
    playerChoice = 2;
    break;
    case "rock":
    playerChoice = 3;
    default:
    alert("Wrong choice / Typo");
  }
  if(playerChoice===computerSelection){
    console.log("Draw!");
  }

  if((computerSelection===1 && playerChoice===3)||(computerSelection===2 && playerChoice===1))
  {
    return console.log("You win!" + objects[playerSelection-1] + "beats " + objects[computerSelection-1]);
  }else {
    return console.log("You lose!" + objects[computerSelection-1] + "beats " + objects[playerSelection-1]);
  }

}
