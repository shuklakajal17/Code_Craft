let currentPlayer = "X";
let gameOver = false;
let gameBoard = ["", "", "", "", "", "", "", "", ""];

function updateBoard() {
  const cells = document.querySelectorAll(".cell");
  for (let i = 0; i < cells.length; i++) {
    
    cells[i].textContent = gameBoard[i];
  }
}

function handleClick(index) {
  if (gameOver) {
    alert("Game is already over! Reset to play again.");
    return;
  }

  if (gameBoard[index] === "") {
    gameBoard[index] = currentPlayer;
    updateBoard();

    if (checkWin()) {
      document.getElementById("status").innerText = "Winner is " + currentPlayer;
      gameOver = true;
    } else {
      
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      document.getElementById("status").innerText = "Current Player: " + currentPlayer;
    }
  } else {
    alert("This cell is already taken!");
  }
}

function checkWin() {
  const combos = [
    [0,1,2], [3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8], 
    [0,4,8], [2,4,6]           
  ];

  for (let i = 0; i < combos.length; i++) {
    let [a, b, c] = combos[i];
    if (gameBoard[a] !== "" && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
      return true;
    }
  }

  return false;
}


function setupGame() {
  const boardDiv = document.getElementById("board");
  boardDiv.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.addEventListener("click", () => handleClick(i));
    boardDiv.appendChild(cell);
  }

  updateBoard();
  document.getElementById("status").innerText = "Current Player: " + currentPlayer;
}

function resetGame() {
  currentPlayer = "X";
  gameOver = false;
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  setupGame();
}

setupGame();
