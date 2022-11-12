//a function to convert number value to string
function numberSelectionToString(choiceValue){
  switch (choiceValue) {
      case 0:
        return 'rock'
      case 1:
        return 'paper'
      case 2:
        return 'scissors'
    }
}

function runGame(playerSelection){
    //random computer choice
    const computerSelection = parseInt(Math.random() * 3)
    let playerPointsTag = document.getElementById("playerPoints");
    let machinePointsTag = document.getElementById("machinePoints");
    let playerChoiceTag = document.getElementById("playerChoice");
    let machineChoiceTag = document.getElementById("machineChoice");

    console.log(playerPoints);
    console.log(machinePoints);
    console.log(playerChoice);
    console.log(machineChoice);
    
    let playerAction = "aaa"
    a = document.appendChild(playerAction);

    a.textContent += "playerAction";
    //empate e acaba
    if(playerSelection === computerSelection){
        return;
    }
    

   return;
}