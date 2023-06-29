let buttons = document.querySelectorAll('.buttons');
let playerSelectionInt;
let computerSelection;
let num;
let userResult = 0;
let compResult = 0;
let numOfPlayedGames = 0;
let results = document.querySelector(".results");
const restartButton = document.createElement('button');

function rock() {
    playerSelectionInt = 0;
    computerSelection = Math.floor(Math.random() * 3);
    if(playerSelectionInt === 0 && computerSelection === 2) {
        num = 1;
    } else if(playerSelectionInt === computerSelection) {
        num = 0;
    } else if(playerSelectionInt < computerSelection) {
        num = -1;
    }
}

function paper() {
    playerSelectionInt = 1;
    computerSelection = Math.floor(Math.random() * 3);
    if(playerSelectionInt > computerSelection) {
        num = 1;
    } else if(playerSelectionInt === computerSelection) {
        num = 0;
    } else if(playerSelectionInt < computerSelection) {
        num = -1;
    }
}

function scissors() {
    playerSelectionInt = 2;
    computerSelection = Math.floor(Math.random() * 3);
    if(playerSelectionInt === 2 && computerSelection === 0) {
        num = -1;
    } if(playerSelectionInt > computerSelection) {
        num = 1;
    } else if(playerSelectionInt === computerSelection) {
        num = 0;
    }
}

function compareResults() {
    if(numOfPlayedGames <= 4) {
        if(num === 1) {
            numOfPlayedGames++;
            userResult += num;
            results.textContent = ("You have won! Play another time. " + `You: ${userResult} Machine: ${compResult}`);
        } 
        if(num === 0) {
            numOfPlayedGames++;
            results.textContent = ("Draw! Try Again. " + `You: ${userResult} Machine: ${compResult}`);
        } 
        if(num === -1) {
            numOfPlayedGames++;
            compResult -= num;
            results.textContent = ("You have lost! Try again. " + `You: ${userResult} Machine: ${compResult}`);
        }
    } else if (numOfPlayedGames === 5) {
        if(num === 1) {
            userResult += num;
            if(userResult > compResult) {
                results.textContent = ("You have won the entire game! Congratulations!" + ` You: ${userResult} Machine: ${compResult}`);
            } else if (userResult < compResult) {
                results.textContent = ("You have lost the entire game! Sorry..." + ` You: ${userResult} Machine: ${compResult}`);
            } else if (userResult === compResult) {
                results.textContent = ("Draw! The game has ended!" + ` You: ${userResult} Machine: ${compResult}`)
            }
            numOfPlayedGames++;
        } else if(num === -1) {
            compResult -= num;
            if(userResult > compResult) {
                results.textContent = ("You have won the entire game! Congratulations!" + ` You: ${userResult} Machine: ${compResult}`);
            } else if (userResult < compResult) {
                results.textContent = ("You have lost the entire game! Sorry..." + ` You: ${userResult} Machine: ${compResult}`);
            } else if (userResult === compResult) {
                results.textContent = ("Draw! The game has ended!" + ` You: ${userResult} Machine: ${compResult}`                                              )
            }
            numOfPlayedGames++;
        } else {
            if(userResult > compResult) {
                results.textContent = ("Draw! But you have won the entire game! Congratulations!" + ` You: ${userResult} Machine: ${compResult}`);
            } else if (userResult < compResult) {
                results.textContent = ("Draw! You have lost the entire game!" + ` You: ${userResult} Machine: ${compResult}`);
            } else if (userResult === compResult) {
                results.textContent = ("Draw! The game has ended!" + ` You: ${userResult} Machine: ${compResult}`);
            }
            numOfPlayedGames++;
        }
        restartButton.textContent = "Restart?";
        document.body.appendChild(restartButton);
        restartButton.addEventListener("click", () => {
            if(document.body.children.length > 2){            
                document.body.removeChild(restartButton);
            }
            numOfPlayedGames = 0;
            userResult = 0;
            compResult = 0;
            results.textContent = "Here will be the results of the game. Click on of the buttons."
        });
    }
}

function listenForButton(nodeList) {
    nodeList.forEach(e => {
        e.addEventListener("click", e => {
            switch (e.target.getAttribute('class')) {
                case "rock":
                    rock();
                    console.log(num);
                    break;
                case "paper":
                    paper();
                    console.log(num);
                    break;
                case "scissors":
                    scissors();
                    console.log(num);
                    break;
                default:
                    break;
            }

            compareResults();
        })
    })
}

listenForButton(buttons);