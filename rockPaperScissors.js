function runGame(playerSelection){
    //random computer choice
    const computerSelection = parseInt(Math.random() * 3)
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
    //empate e acaba
    if(playerSelection === computerSelection){
        return;
    }
    

    
   return;
}