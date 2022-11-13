//a function to convert number value to string
function numberSelectionToString(choiceValue){
  switch (choiceValue) {
      case 0:
        return 'Rock'
      case 1:
        return 'Paper'
      case 2:
        return 'Scissors'
    }
}

function gameResult(playerValue, machineValue){
  let gameResultTag = document.getElementById("gameResult");
  if(playerValue === machineValue){
    return gameResultTag.textContent = "Empate";
  }else{
    winCheck(playerValue, machineValue);
  }
}

function winCheck(playerValue, machineValue){
  let gameResultTag = document.getElementById("gameResult");
  if(playerValue == 0 && machineValue == 1){
    machineWinCount();
    return gameResultTag.textContent = "Machine win";
  }else if(playerValue == 1 && machineValue == 2){
    machineWinCount();
    return gameResultTag.textContent = "Machine win";
  }else if(playerValue == 2 && machineValue == 0){
    machineWinCount();
    return gameResultTag.textContent = "Machine win";
  }else{
    playerWinCount();
    return gameResultTag.textContent = "You win!";
  }
}

function machineWinCount(){
  let machinePointsTag = document.getElementById("machinePoints");
  if(parseInt(machinePointsTag.textContent) == 3){
    machinePointsTag.style.backgroundColor = "#a56377";
    machinePointsTag.style.color = "#111314";
  }
  if(parseInt(machinePointsTag.textContent) != 5){
    machinePointsTag.textContent = (parseInt(machinePointsTag.textContent)) + 1;
  }else{
    machinePointsTag.textContent = "MACHINE WIN";
    alert("MACHINE WIN. \n Sad. But you can press 'ok' button and try again.");
    document.location.reload(true);
  }
}

function playerWinCount(){
  let playerPointsTag = document.getElementById("playerPoints");
  if(parseInt(playerPointsTag.textContent) == 3){
    playerPointsTag.style.backgroundColor = "#1daced";
    playerPointsTag.style.color = "#111314";
  }
  if(parseInt(playerPointsTag.textContent) != 5){
    playerPointsTag.textContent = (parseInt(playerPointsTag.textContent)) + 1;
  }else{
    playerPointsTag.textContent = "YOU WIN";
    alert("YOU WIN. \n Now you have a blessing from God \n Jesus loves you");
    document.location.reload(true);
  }
}

function choiceDisplay(playerSelection, computerSelection){
  let playerActionText = document.createElement("li");
  let machineActionText = document.createElement("li");
  let playerChoiceTag = document.getElementById("playerChoice");
  let machineChoiceTag = document.getElementById("machineChoice");
  playerActionText.textContent = numberSelectionToString(playerSelection);
  machineActionText.textContent = numberSelectionToString(computerSelection);
  playerChoiceTag.appendChild(playerActionText);
  machineChoiceTag.appendChild(machineActionText);
}

function runGame(playerSelection){
  const computerSelection = parseInt(Math.random() * 3);
  gameResult(playerSelection, computerSelection);
  choiceDisplay(playerSelection, computerSelection);
  return;
}