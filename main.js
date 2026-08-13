function getRandom(){
  return Math.random();
}
function getComputerChoice(){
  let x = getRandom();
  if (x <= 0.33){
    return "Scissors";
  } else if (x > 0.66){
    return "Rock";
  } else{
    return "Paper";
  }
}
function getHumanChoice(){
  let y = parseInt(prompt("Enter 1 or 2 or 3 for Rock,Paper,Scissors respectively: "));
  if (y == 1){
    return "Rock";
  } else if (y==2){
    return "Paper";
  } else if (y == 3){
    return "Scissors";
  } else{
    console.log("You Entered Incorrent No. !");
    return;
  }
}
function playRound(){
  let humanChoice = getHumanChoice();
  console.log(humanChoice);
  let computerChoice = getComputerChoice();
  console.log(computerChoice);
  if (humanChoice == "Rock"){
    if (computerChoice == "Paper"){
      console.log("You lost!");
      computerScore = computerScore + 1;
    } else if (computerChoice == "Scissors"){
      console.log("You Win!");
      humanScore = humanScore + 1;
    } else{
      return;
    }
  } else if(humanChoice == "Paper"){
    if (computerChoice == "Rock"){
      console.log("You Won!");
      humanScore = humanScore + 1;
    } else if (computerChoice == "Scissors"){
      console.log("You lost!");
      computerScore = computerScore +1;
    } else {
      return;
    }
  } else if(humanChoice == "Scissors"){
    if(computerChoice == "Rock"){
      console.log("You lose!");
      computerScore = computerScore + 1;
    } else if(computerChoice == "Paper"){
      console.log("You Win!");
      humanScore = humanScore + 1;
    } else{
      return;
    }
  }
}
let humanScore = 0;
let computerScore = 0;
function playGame(){
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  if (humanScore > computerScore){
    console.log("You Win the Game!");
  } else if (humanScore < computerScore){
    console.log("You lose The Game!");
  } else{
    console.log("Draw!");
  }
}
playGame();
