 
   const choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    const computerIndex = Math.floor(Math.random() * choices.length);
    return choices[computerIndex];
}

  

function getHumanChoice() {
    let playerchoice = prompt('what are you picking?(rock, paper, scissors)').toLowerCase();
    return playerchoice;
}
 


 let initialHumanScore = 0;
 let initialComputerScore = 0;

 console.log(initialHumanScore);
 console.log(initialComputerScore);

function playGame() {
    for(let i = 0; i < 5; i++) {
       console.log( `Round ${i + 1}`); 
       playRound();
    }
    

 function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(`Human choice ${humanChoice}, Computer Choice: ${computerChoice}`)
 
 
   
   if (humanChoice === computerChoice) { 
    console.log('its a tie, GOOD GAME!!') 
    return;
}


    if (humanChoice === 'rock' &&  computerChoice === 'paper') {
        initialComputerScore++;
        console.log('Oops, better luck next time, score: ' + initialComputerScore);
    }

    if (humanChoice === 'paper' && computerChoice === 'rock') {
        initialHumanScore++;
        console.log('Yay! You got a point!' + initialHumanScore);
    }

        if (humanChoice === 'rock' && computerChoice === 'scissors') {
         initialHumanScore++
        console.log('Yay! You got a point!: score' + initialHumanScore);
        }
    
        

        if (humanChoice === 'scissors' && computerChoice === 'rock') {
        initialComputerScore++
         console.log('Oops, better luck next time, score: ' + initialHumanScore);

        }

        if (humanChoice === 'scissors' && computerChoice === 'paper') {
            initialHumanScore++;
            console.log('Yay! You got a point!' + initialHumanScore);
         }

       
}

}


         

        playGame();


