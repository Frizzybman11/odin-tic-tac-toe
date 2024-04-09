const gameboard = {
    spaces: [0, 1, 2, 3, 4, 5, 6, 7, 8]
}

const playerOne = {
    name: "One",
    marker: "X",
    spaces: []
}

const playerTwo = {
    name: "Two",
    marker: "O",
    spaces: []
}

const winConditions = {
    row1: [0, 1, 2],
    row2: [3, 4, 5],
    row3: [6, 7, 8],
    col1: [0, 3, 6],
    col2: [1, 4, 7],
    col3: [2, 5, 8],
    diag1: [0, 4, 8],
    diag2: [2, 4, 6]
}

function game(gameboard, playerOne, playerTwo, winConditions){
    let gameStatus = "start"
    let activeSquares = gameboard.spaces
    while (gameStatus = "start"){
        let turnStatus = "one"
        while (turnStatus = "one"){
            console.log(playerOne.name + "'s turn!")
            //let userChoice = prompt()
            if (userChoice in activeSquares){
                playerOne.spaces.push(userChoice)
                console.log(playerOne.spaces)
            } else {
                console.log("Invalid space. Try again!")
            }
        }
    }
}

game(gameboard, playerOne, playerTwo, winConditions)