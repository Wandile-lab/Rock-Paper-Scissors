 
   const choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    const computerIndex = Math.floor(Math.random() * choices.length);
    return choices[computerIndex];
}

 let initialHumanScore = 0;
 let initialComputerScore = 0;

 console.log(initialHumanScore);
 console.log(initialComputerScore);

 const resultDiv = document.getElementById("result");
const humanScoreSpan = document.getElementById("humanScore");
const computerScoreSpan = document.getElementById("computerScore");



    

 function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let resultMessage = `Human choice ${humanChoice}, Computer Choice: ${computerChoice}`
 
 
   
   if (humanChoice === computerChoice) { 
    resultMessage += 'its a tie, GOOD GAME!!'; 
    return;
} else {


    if (humanChoice === 'rock' &&  computerChoice === 'paper') {
        initialComputerScore++;
        resultMessage = 'Oops, better luck next time, score: ' + initialComputerScore;
    }

    if (humanChoice === 'paper' && computerChoice === 'rock') {
        initialHumanScore++;
         resultMessage = 'Yay! You got a point!' + initialHumanScore;
    }

        if (humanChoice === 'rock' && computerChoice === 'scissors') {
         initialHumanScore++
         resultMessage = 'Yay! You got a point!: score' + initialHumanScore;
        }
    
        

        if (humanChoice === 'scissors' && computerChoice === 'rock') {
        initialComputerScore++
          resultMessage = 'Oops, better luck next time, score: ' + initialHumanScore;

        }

        if (humanChoice === 'scissors' && computerChoice === 'paper') {
            initialHumanScore++;
           resultMessage = 'Yay! You got a point!' + initialHumanScore;
         }
        }

         resultDiv.textContent = resultMessage;
         humanScoreSpan.textContent = initialHumanScore;
         computerScoreSpan.textContent = initialComputerScore;

       
}


document.addEventListener('DOMContentLoaded', () => {
const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const humanChoice = event.target.getAttribute("data-choice"); 
            playRound(humanChoice);
        })

    });

})


    




         

        


