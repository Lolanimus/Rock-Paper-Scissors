let buttons = document.querySelectorAll('.buttons');
let playerSelectionInt;
let computerSelection;
let num;
let userResult = 0;
let compResult = 0;
let numOfPlayedGames = 0;

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
    if(numOfPlayedGames < 3) {
        if(num === 1) {
            numOfPlayedGames++;
            userResult += num;
            console.log("You have won! Play another time. " + `You: ${userResult} Machine: ${compResult}`);
        } 
        if(num === 0) {
            numOfPlayedGames++;
            console.log("Draw! Try Again. " + `You: ${userResult} Machine: ${compResult}`);
        } 
        if(num === -1) {
            numOfPlayedGames++;
            compResult -= num;
            console.log("You have lost! Try again. " + `You: ${userResult} Machine: ${compResult}`);
        }
    } else {
        if(num === 1) {
            userResult += num;
            if(userResult > compResult) {
                console.log("You have won the entire game! Congratulations!" + ` You: ${userResult} Machine: ${compResult}`);
            } else if (userResult < compResult) {
                console.log("You have lost the entire game! Sorry..." + ` You: ${userResult} Machine: ${compResult}`);
            } else if (userResult === compResult) {
                console.log("Draw! The game has ended!" + ` You: ${userResult} Machine: ${compResult}`)
            }
        } else if(num === -1) {
            compResult -= num;
            if(userResult > compResult) {
                console.log("You have won the entire game! Congratulations!" + ` You: ${userResult} Machine: ${compResult}`);
            } else if (userResult < compResult) {
                console.log("You have lost the entire game! Sorry..." + ` You: ${userResult} Machine: ${compResult}`);
            } else if (userResult === compResult) {
                console.log("Draw! The game has ended!" + ` You: ${userResult} Machine: ${compResult}`                                              )
            }
        } else if(num === 0 & userResult > compResult) {
            console.log("Draw! But you have won the entire game! Congratulations!" + ` You: ${userResult} Machine: ${compResult}`);
        } else if(num === 0 & userResult < compResult) {
            console.log("Draw! You have lost the entire game!" + ` You: ${userResult} Machine: ${compResult}`);
        } else if(num === 0 & userResult === compResult) {
            console.log("Draw! The game has ended!" + ` You: ${userResult} Machine: ${compResult}`);
        }
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

// buttons.forEach(e => {
//     e.addEventListener("click", e => {
//         switch (e.target.getAttribute('class')) {
//             case "rock":
//                 playRound(0);
//                 console.log("rock");
//                 break;
//             case "paper":
//                 playRound(1);
//                 console.log("paper");
//                 break;
//             case "scissors":
//                 playRound(2);
//                 console.log("scissors");
//                 break;
//         }
//     })
// })