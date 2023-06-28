let buttons = document.querySelectorAll('.buttons');
let playerSelectionInt;
let computerSelection;
let num;

function rock() {
    playerSelectionInt = 0;
    if(playerSelectionInt === 0 && computerSelection === 2) {
        num = 1;
    } else if(playerSelectionInt === computerSelection) {
        num = 0;
    } else if(playerSelectionInt < computerSelection) {
        num = -1;
    }
    console.log(num);
}

function paper() {
    playerSelectionInt = 1;
    if(playerSelectionInt > computerSelection) {
        num = 1;
    } else if(playerSelectionInt === computerSelection) {
        num = 0;
    } else if(playerSelectionInt < computerSelection) {
        num = -1;
    }
    console.log(num);
}

function scissors() {
    playerSelectionInt = 2;
    if(playerSelectionInt === 2 && computerSelection === 0) {
        num = -1;
    } if(playerSelectionInt > computerSelection) {
        num = 1;
    } else if(playerSelectionInt === computerSelection) {
        num = 0;
    }
    console.log(num);
}

function listenForButton(nodeList) {
    nodeList.forEach(e => {
        e.addEventListener("click", e => {
            switch (e.target.getAttribute('class')) {
                case "rock":
                    rock();
                    break;
                case "paper":
                    paper();
                    break;
                case "scissors":
                    scissors();
                    break;
                default:
                    break;
            }
        })
    })
}

function playRound() {
    computerSelection = Math.floor(Math.random() * 3);
    for (let index = 0; index < 4; index++) {
        listenForButton(buttons);        
    }
}

playRound();



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