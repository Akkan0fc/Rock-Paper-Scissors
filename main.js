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
function getHumanChoice(y){
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
function playRound(x){
  let humanChoice = x;
  let computerChoice = getComputerChoice();
  if (humanChoice == "Rock"){
    if (computerChoice == "Paper"){
      computerScore = computerScore + 1;
      div.textContent = `${humanChoice}-${computerChoice} You lost! ${humanScore}-${computerScore}`;
    } else if (computerChoice == "Scissors"){
      humanScore = humanScore + 1;
      div.textContent = `${humanChoice}-${computerChoice} You Won! ${humanScore}-${computerScore}`;
    } else{
      div.textContent = `${humanChoice}-${computerChoice} Draw! ${humanScore}-${computerScore}`;
    }
  } else if(humanChoice == "Paper"){
    if (computerChoice == "Rock"){
      humanScore = humanScore + 1;
      div.textContent = `${humanChoice}-${computerChoice} You Won! ${humanScore}-${computerScore}`;
    } else if (computerChoice == "Scissors"){
      computerScore = computerScore +1;
      div.textContent = `${humanChoice}-${computerChoice} You lost! ${humanScore}-${computerScore}`;
    } else {
    div.textContent = `${humanChoice}-${computerChoice} Draw! ${humanScore}-${computerScore}`;
    }
  } else if(humanChoice == "Scissors"){
    if(computerChoice == "Rock"){
      computerScore = computerScore + 1;
      div.textContent = `${humanChoice}-${computerChoice} You lost! ${humanScore}-${computerScore}`;
    } else if(computerChoice == "Paper"){
      humanScore = humanScore + 1;
      div.textContent = `${humanChoice}-${computerChoice} You Won! ${humanScore}-${computerScore}`;
    } else{
      div.textContent = `${humanChoice}-${computerChoice} Draw! ${humanScore}-${computerScore}`;
    }
  }
}
let humanScore = 0;
let computerScore = 0;
function playGame(){
  if (humanScore >= 5 || computerScore >=5){
    if (humanScore > computerScore){
      div.textContent = "You Won the Game!";
    } else{
      div.textContent = "You Lost the Game!";
    }
  }
}
const div = document.querySelector("div");
const rockbtn = document.querySelector("#rock");
rockbtn.addEventListener('click', function(){
  playRound("Rock");
  playGame();
});
const paperbtn = document.querySelector("#paper");
paperbtn.onclick = function(){
  playRound("Paper");
  playGame();
};
const scissorbtn = document.querySelector("#scissors");
scissorbtn.addEventListener('click', function(){
  playRound("Scissors");
  playGame();
});
