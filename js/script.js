// console.log("script is working");

//player 1 always starts first and is red

let currentPlayer = "Red";
const currentPlayerMsg = document.querySelector(".currentPlayerMsg");
// console.log(currentPlayerMsg);
currentPlayerMsg.innerHTML = `${currentPlayer}'s turn`;

console.log(currentPlayer);

const cellElements = document.querySelectorAll(".cell");
let gameStatusActive = true;

//reset button function
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetfunction);

//function to refresh page to start new game
function resetfunction() {
  location.reload();
}
//add event listener for each cell
cellElements.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});

//removed event listner after winner is determined
function removeEvents() {
  cellElements.forEach((cell) => {
    cell.removeEventListener("click", handleClick);
  });
}

let gameResults = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
// console.log(gameResults);
function handleClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex = clickedCell.getAttribute("data-cell-index");

  console.log(clickedCellIndex);
  if (currentPlayer === "Red") {
    clickedCell.classList.add("red");
  } else {
    clickedCell.classList.add("blue");
  }
  arrayIndex = clickedCellIndex.split("");
  gameResults[arrayIndex[0]][arrayIndex[1]] = currentPlayer;
  console.table(gameResults);
  winLogic();
  playerSelection();
  if (gameStatusActive === true) {
    console.log(gameStatusActive);
    currentPlayerMsg.innerHTML = `${currentPlayer}'s turn`;
  } else {
    currentPlayerMsg.innerHTML = winnerMsg;
  }
}

//logic to alternate players
function playerSelection() {
  currentPlayer = currentPlayer === "Red" ? "Blue" : "Red";
  //statusDisplay.innerHTML = currentPlayerTurn();
}

//function to determine if there is a winner
function winLogic() {
  console.log(gameResults[0][0]);
  console.log(gameResults[0][1]);
  console.log(gameResults[0][2]);
  if (
    gameResults[0][0] === gameResults[0][1] &&
    gameResults[0][1] === gameResults[0][2] &&
    gameResults[0][0] !== ""
  ) {
    gameStatusActive = false;
    removeEvents();
    // currentPlayerMsg.innerHTML = `${currentPlayer} is the winner on row 1!`;
    winnerMsg = `${currentPlayer} is the winner on row 1!`;
    console.log(winnerMsg);
  } else if (
    gameResults[1][0] === gameResults[1][1] &&
    gameResults[1][1] === gameResults[1][2] &&
    gameResults[1][0] !== ""
  ) {
    gameStatusActive = false;
    winnerMsg = `${currentPlayer} is the winner on row 2!`;
    removeEvents();
  } else if (
    gameResults[2][0] === gameResults[2][1] &&
    gameResults[2][1] === gameResults[2][2] &&
    gameResults[2][0] !== ""
  ) {
    gameStatusActive = false;
    winnerMsg = `${currentPlayer} is the winner on row 3!`;
    removeEvents();
  } else if (
    gameResults[0][0] === gameResults[1][0] &&
    gameResults[1][0] === gameResults[2][0] &&
    gameResults[0][0] !== ""
  ) {
    gameStatusActive = false;
    winnerMsg = `${currentPlayer} is the winner on column 1!`;
    removeEvents();
  } else if (
    gameResults[0][1] === gameResults[1][1] &&
    gameResults[1][1] === gameResults[2][1] &&
    gameResults[0][1] !== ""
  ) {
    gameStatusActive = false;
    winnerMsg = `${currentPlayer} is the winner on column 2!`;
    removeEvents();
  } else if (
    gameResults[0][2] === gameResults[1][2] &&
    gameResults[1][2] === gameResults[2][2] &&
    gameResults[0][2] !== ""
  ) {
    gameStatusActive = false;
    winnerMsg = `${currentPlayer} is the winner on column 3!`;
    removeEvents();
  } else if (
    gameResults[0][0] === gameResults[1][1] &&
    gameResults[1][1] === gameResults[2][2] &&
    gameResults[0][0] !== ""
  ) {
    gameStatusActive = false;
    winnerMsg = `${currentPlayer} is the winner a diagonal!`;
    removeEvents();
  } else if (
    gameResults[0][2] === gameResults[1][1] &&
    gameResults[1][1] === gameResults[2][0] &&
    gameResults[0][2] !== ""
  ) {
    gameStatusActive = false;
    winnerMsg = `${currentPlayer} is the winner a diagonal!`;
    removeEvents();
  } else {
    console.log("no winner yet");
  }
}
