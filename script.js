function game(playerOne, playerTwo, turnHeading){
    const gameboard = {
        spaces: [0, 1, 2, 3, 4, 5, 6, 7, 8]
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
    let gameStatus = "start"
    let activeSquares = gameboard.spaces
    while (gameStatus = "start"){
        let turnStatus = "one"
        while (turnStatus = "one"){
            turnHeading.textContent = playerOne.name + "'s turn!"
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

function boardHTML(){
    const boardTable = document.createElement("table")
    const boardRow1 = document.createElement("tr")
    const boardRow2 = document.createElement("tr")
    const boardRow3 = document.createElement("tr")
    const boardCell0 = document.createElement("td")
    const boardCell1 = document.createElement("td")
    const boardCell2 = document.createElement("td")
    const boardCell3 = document.createElement("td")
    const boardCell4 = document.createElement("td")
    const boardCell5 = document.createElement("td")
    const boardCell6 = document.createElement("td")
    const boardCell7 = document.createElement("td")
    const boardCell8 = document.createElement("td")
    boardRow1.setAttribute("id", "row1")
    boardRow2.setAttribute("id", "row2")
    boardRow3.setAttribute("id", "row3")
    boardCell0.setAttribute("id", "cell0")
    boardCell1.setAttribute("id", "cell1")
    boardCell2.setAttribute("id", "cell2")
    boardCell3.setAttribute("id", "cell3")
    boardCell4.setAttribute("id", "cell4")
    boardCell5.setAttribute("id", "cell5")
    boardCell6.setAttribute("id", "cell6")
    boardCell7.setAttribute("id", "cell7")
    boardCell8.setAttribute("id", "cell8")
    boardRow1.append(boardCell0)
    boardRow1.append(boardCell1)
    boardRow1.append(boardCell2)
    boardRow2.append(boardCell3)
    boardRow2.append(boardCell4)
    boardRow2.append(boardCell5)
    boardRow3.append(boardCell6)
    boardRow3.append(boardCell7)
    boardRow3.append(boardCell8)
    boardTable.append(boardRow1)
    boardTable.append(boardRow2)
    boardTable.append(boardRow3)
    document.getElementById("content").insertAdjacentElement("beforeend", boardTable)
}

const startButton = document.getElementById("startButton")

const playerOne = {
    name: "Player One",
    marker: "X",
    spaces: []
}

const playerTwo = {
    name: "Player Two",
    marker: "O",
    spaces: []
}

startButton.addEventListener("click", () => {
    if (document.getElementById("playerOne").value != ""){
    playerOne.name = document.getElementById("playerOne").value
    }
    if (document.getElementById("playerTwo").value != ""){
    playerTwo.name = document.getElementById("playerTwo").value
    }
    document.getElementById("content").innerHTML = ""
    const turnHeading = document.createElement("h1")
    turnHeading.setAttribute("id", "playerTurn")
    document.getElementById("content").insertAdjacentElement("afterbegin", turnHeading)
    boardHTML()
    game(playerOne, playerTwo, turnHeading)
})
