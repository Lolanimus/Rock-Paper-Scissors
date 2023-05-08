var compChoice;
var userChoice;
let getUserChoice;

function caseInsensitive(userString, correctString) {
    if(userString.localeCompare(correctString, "en", { sensitivity: "base" }) === 0) return 1;
    else return 0;
}

function playRound(playerSelectionStr, playerSelectionInt, computerSelection) {
    computerSelection = Math.floor(Math.random() * 3);
    playerSelectionStr = prompt("Write the shape of your hand(either 'Rock', 'Paper' or 'Scissors')");
    if (caseInsensitive(playerSelectionStr, "Paper")) {
        playerSelectionInt = 0;
    } else if(caseInsensitive(playerSelectionStr, "Scissors")) {
        playerSelectionInt = 1;
    } else {
        playerSelectionInt = 2;
    }

    if(playerSelectionInt === 0 && computerSelection === 2) {
        return 1;
    } if(playerSelectionInt === 2 && computerSelection === 0) {
        return -1;
    } if(playerSelectionInt > computerSelection) {
        return 1;
    } else if(playerSelectionInt === computerSelection) {
        return 0;
    } else if(playerSelectionInt < computerSelection) {
        return -1;
    }
}

function game() {
    let result = playRound(getUserChoice, userChoice, compChoice);
    let userResult = 0;
    let compResult = 0;
    for (let index = 0; index <= 4; index++) {
        if(index <= 3) {
            if(result === 1) {
                userResult += result;
                console.log("You have won! Play another time. " + `You: ${userResult} Machine: ${compResult}`);
            } 
            if(result === 0) {
                console.log("Draw! Try Again. " + `You: ${userResult} Machine: ${compResult}`);
            } 
            if(result === -1) {
                compResult -= result;
                console.log("You have lost! Try again. " + `You: ${userResult} Machine: ${compResult}`);
            }
            result = playRound(getUserChoice, userChoice, compChoice);

        } else {
            if(userResult === compResult){
                console.log("Draw! The game has ended!" + ` You: ${userResult} Machine: ${compResult}`);
            } else if(userResult > compResult) {
                if(result === 1) {
                    userResult += result;
                    console.log("You have won the entire game! Congratulations!" + ` You: ${userResult} Machine: ${compResult}`);
                } else if(result === 0) {
                    console.log("Draw! But you have won the entire game! Congratulations!" + `You: ${userResult} Machine: ${compResult}`);
                } else {
                    compResult -= result;
                    console.log("You have won the entire game! Congratulations!" + ` You: ${userResult} Machine: ${compResult}`);
                }
            } else { 
                if(result === 1) {
                    userResult += result;
                    console.log("You have lost the entire game! Sorry..." + ` You: ${userResult} Machine: ${compResult}`);
                } else if(result === 0) {
                    console.log("Draw! Anyways, you have lost the entire game! Sorry..." + `You: ${userResult} Machine: ${compResult}`);
                } else {
                    compResult -= result;
                    console.log("You have lost the entire game! Sorry..." + ` You: ${userResult} Machine: ${compResult}`);
                }
            }
        }
    }
}

game();
