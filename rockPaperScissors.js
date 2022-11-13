function gameResult(playerValue, machineValue){
  //confiro inicialmente se deu empate.
  if(playerValue === machineValue){
    //caso seja empate. busco pelo elemente que dara display dos resultados
    let gameResultTag = document.getElementById("gameResult");
    //E ja do return na função com o elemento
    return gameResultTag.textContent = "Empate";
  }else{
    //Caso não de empate vamos buscar o vencedor
    winCheck(playerValue, machineValue);
  }
}

function winCheck(playerValue, machineValue){
  //aqui busco já o elemento separado pra dar display com o resultado
  let gameResultTag = document.getElementById("gameResult");
  if(playerValue == 0 && machineValue == 1){
    //se player jogo 'papel' e o computador pedra. Então chamo a função que conta a vitoria para maquina e da display
    machineWinCount();
    //E aqui dou display informativo com a vitoria
    return gameResultTag.textContent = "Machine win";
  }else if(playerValue == 1 && machineValue == 2){
    machineWinCount();
    return gameResultTag.textContent = "Machine win";
  }else if(playerValue == 2 && machineValue == 0){
    machineWinCount();
    return gameResultTag.textContent = "Machine win";
  }else{
    // Caso em nem um dos casos seja vitoria da maquina. isso quer dizer vitoria do player.
    // Chamo um função identica a para das display a favor do computador. só q essa pegando as tags do player
    playerWinCount();
    return gameResultTag.textContent = "You win!";
  }
}

function machineWinCount(){
  //pega o elemento que esta contando os pontos a favor do computador
  let machinePointsTag = document.getElementById("machinePoints");
  //estilizo essa tag com uma cor gradual. O calculo foi realizado no Alpha da cor RGB vou de 0.1 a 1
  machinePointsTag.style.backgroundColor = `rgba(190, 102, 129, ${((((parseInt(machinePointsTag.textContent)+1)*2)/10))})`;
  //Por causa da alteração da cor do background feito na linha acima. aqui eu tenho q alterar a cor da conte caso o background
  if(parseInt(machinePointsTag.textContent) == 2){
    machinePointsTag.style.color = "#111314";
  }
  //aqui caso ainda não estejamos nos 5 pontos. acrescentamos mais um ponto
  //confiro oque contem no textContent do elemento convertendo o valor para numero inteiro e conferindo ser menor que 5
  if(parseInt(machinePointsTag.textContent) != 5){
    machinePointsTag.textContent = (parseInt(machinePointsTag.textContent)) + 1;
  }else{
    //caso contrario seja maior que 5 então temos um vencedor. e o elemento recebe o resultado um Alert é lançado
    machinePointsTag.textContent = "GAME OVER";
    alert("MACHINE WIN. \n Sad. But you can press 'ok' button and try again.");
    //o Dom recebe um refresh e o jogo recomeça;
    document.location.reload(true);
  }
}

function playerWinCount(){
  let playerPointsTag = document.getElementById("playerPoints");
  playerPointsTag.style.backgroundColor = `rgba(29, 172, 237, ${((((parseInt(playerPointsTag.textContent)+1)*2)/10))})`;
  if(parseInt(playerPointsTag.textContent) == 2){
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

function choiceDisplay(playerSelection, computerSelection){
  //Seleciono o bloco html embaixo da pontuação. que é uma tag <ul> para inserir os logs de escolha
  let playerChoiceTag = document.getElementById("playerChoice");
  let machineChoiceTag = document.getElementById("machineChoice");
  //Crio um novo elemento <li> e salvo na variavel playerActionText para mim inserir o texto
  let playerActionText = document.createElement("li");
  let machineActionText = document.createElement("li");
  //pego a tag criada e insiro o texto. pra isso jogo o numero da escolha e transformo em texto previamente
  playerActionText.textContent = numberSelectionToString(playerSelection);
  machineActionText.textContent = numberSelectionToString(computerSelection);
  //aqui eu busco pelo elemento html já existente para poder usar o 'InsertBefore'
  let existentNodePlayerChoiceTag = document.querySelector('#playerChoice>li');
  let existentNodeMachineChoiceTag = document.querySelector('#machineChoice>li');
  //e adiciono meu novo elemento <li> já com o texto no <ul> com id's #playerChoice e #machineChoice
  playerChoiceTag.insertBefore(playerActionText, existentNodePlayerChoiceTag);
  machineChoiceTag.insertBefore(machineActionText, existentNodeMachineChoiceTag);
}

function runGame(playerSelection){
  //Já recebendo a escolha do player. crio a jogada da maquina de forma random
  const computerSelection = parseInt(Math.random() * 3);
  //chamo um função que confere inicialmente se as escolhas são iguais. caso sejam isso é um empate.
  //caso não a função continua
  gameResult(playerSelection, computerSelection);
  choiceDisplay(playerSelection, computerSelection);
  return;
}