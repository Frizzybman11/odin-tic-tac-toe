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

const gameboard = {
    spaces: [0, 1, 2, 3, 4, 5, 6, 7, 8]
}

const turnHeading = document.createElement("h1")
turnHeading.setAttribute("id", "playerTurn")

let gameStatus = "start"
let turnStatus = "one"

function gameTurn(cell){
    let num = cell.id.slice(-1)
    num = Number(num)
    if (gameStatus == "start"){
        if (turnStatus == "one"){ 
            if (gameboard.spaces.indexOf(num) >= 0){
                playerOne.spaces.push(num)
                cell.textContent = playerOne.marker
                num = gameboard.spaces.indexOf(num)
                gameboard.spaces.splice(num, 1)
                playerOne.spaces.sort()
                let win = checkWin(playerOne)
                if (win == "yes"){
                    turnHeading.textContent = playerOne.name + " wins!"
                    removeClick()
                    gameStatus = "end"
                    return
                } else {
                    turnStatus = "two"
                    turnHeading.textContent = playerTwo.name + "'s turn!"
                }
            } else {
                console.log("Invalid space. Try again!")
            }
        } else if (turnStatus == "two")
            if (gameboard.spaces.indexOf(num) >= 0){
                playerTwo.spaces.push(num)
                cell.textContent = playerTwo.marker
                num = gameboard.spaces.indexOf(num)
                gameboard.spaces.splice(num, 1)
                playerTwo.spaces.sort()
                let win = checkWin(playerTwo)
                if (win == "yes"){
                    turnHeading.textContent = playerTwo.name + " wins!"
                    removeClick()
                    gameStatus = "end"
                    return
                } else {
                    turnStatus = "one"
                    turnHeading.textContent = playerOne.name + "'s turn!"
                }
            } else {
                console.log("Invalid space. Try again!")
            }
    } else if (gameStatus == "end") {
        return
    }
}

function checkWin(player){
    const cell0 = document.getElementById("cell0")
    const cell1 = document.getElementById("cell1")
    const cell2 = document.getElementById("cell2")
    const cell3 = document.getElementById("cell3")
    const cell4 = document.getElementById("cell4")
    const cell5 = document.getElementById("cell5")
    const cell6 = document.getElementById("cell6")
    const cell7 = document.getElementById("cell7")
    const cell8 = document.getElementById("cell8")
    let win = ""
    if (cell0.textContent == player.marker && cell1.textContent == player.marker && cell2.textContent == player.marker){
        cell0.style.color = "red"
        cell1.style.color = "red"
        cell2.style.color = "red"
        win = "yes"
        return win
    } else if (cell3.textContent == player.marker && cell4.textContent == player.marker && cell5.textContent == player.marker){
        cell3.style.color = "red"
        cell4.style.color = "red"
        cell5.style.color = "red"
        win = "yes"
        return win
    } else if (cell6.textContent == player.marker && cell7.textContent == player.marker && cell8.textContent == player.marker){
        cell6.style.color = "red"
        cell7.style.color = "red"
        cell8.style.color = "red"
        win = "yes"
        return win
    } else if (cell0.textContent == player.marker && cell3.textContent == player.marker && cell6.textContent == player.marker){
        cell0.style.color = "red"
        cell3.style.color = "red"
        cell6.style.color = "red"
        win = "yes"
        return win
    } else if (cell1.textContent == player.marker && cell4.textContent == player.marker && cell7.textContent == player.marker){
        cell1.style.color = "red"
        cell4.style.color = "red"
        cell7.style.color = "red"
        win = "yes"
        return win
    } else if (cell2.textContent == player.marker && cell5.textContent == player.marker && cell8.textContent == player.marker){
        cell2.style.color = "red"
        cell5.style.color = "red"
        cell8.style.color = "red"
        win = "yes"
        return win
    } else if (cell0.textContent == player.marker && cell4.textContent == player.marker && cell8.textContent == player.marker){
        cell0.style.color = "red"
        cell4.style.color = "red"
        cell8.style.color = "red"
        win = "yes"
        return win
    } else if  (cell2.textContent == player.marker && cell4.textContent == player.marker && cell6.textContent == player.marker){
        cell2.style.color = "red"
        cell4.style.color = "red"
        cell6.style.color = "red"
        win = "yes"
        return win
    } else {
        win = "no"
        return win
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
    boardTable.setAttribute("id", "gameTable")
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
    boardCell0.setAttribute("onclick", "gameTurn(this)")
    boardCell1.setAttribute("onclick", "gameTurn(this)")
    boardCell2.setAttribute("onclick", "gameTurn(this)")
    boardCell3.setAttribute("onclick", "gameTurn(this)")
    boardCell4.setAttribute("onclick", "gameTurn(this)")
    boardCell5.setAttribute("onclick", "gameTurn(this)")
    boardCell6.setAttribute("onclick", "gameTurn(this)")
    boardCell7.setAttribute("onclick", "gameTurn(this)")
    boardCell8.setAttribute("onclick", "gameTurn(this)")
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

function removeClick(){
    const boardCell0 = document.getElementById("cell0")
    const boardCell1 = document.getElementById("cell1")
    const boardCell2 = document.getElementById("cell2")
    const boardCell3 = document.getElementById("cell3")
    const boardCell4 = document.getElementById("cell4")
    const boardCell5 = document.getElementById("cell5")
    const boardCell6 = document.getElementById("cell6")
    const boardCell7 = document.getElementById("cell7")
    const boardCell8 = document.getElementById("cell8")
    boardCell0.setAttribute("onclick", "")
    boardCell1.setAttribute("onclick", "")
    boardCell2.setAttribute("onclick", "")
    boardCell3.setAttribute("onclick", "")
    boardCell4.setAttribute("onclick", "")
    boardCell5.setAttribute("onclick", "")
    boardCell6.setAttribute("onclick", "")
    boardCell7.setAttribute("onclick", "")
    boardCell8.setAttribute("onclick", "")
}

startButton.addEventListener("click", () => {
    if (document.getElementById("playerOne").value != ""){
    playerOne.name = document.getElementById("playerOne").value
    }
    if (document.getElementById("playerTwo").value != ""){
    playerTwo.name = document.getElementById("playerTwo").value
    }
    document.getElementById("content").innerHTML = ""
    document.getElementById("content").insertAdjacentElement("afterbegin", turnHeading)
    boardHTML()
    turnHeading.textContent = playerOne.name + "'s turn!"
})
