// console.log("script is working");

//player 1 always starts first and is red

let currentPlayer = "Red";

// playerSelection();

console.log(currentPlayer);

const cellElements = document.querySelectorAll(".cell");

//add event listener for each cell
cellElements.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});

//removed event listner after winner is determined
function removeEvents() {
  cellElements.forEach((cell) => {
    cell.removeEventListener("click", handleClick, { once: true });
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
  //   console.log(document.getElementById.value);
}
// console.log(cellElements);

function playerSelection() {
  currentPlayer = currentPlayer === "Red" ? "Blue" : "Red";
  //statusDisplay.innerHTML = currentPlayerTurn();
}

function winLogic() {
  console.log(gameResults[0][0]);
  console.log(gameResults[0][1]);
  console.log(gameResults[0][2]);
  if (
    gameResults[0][0] === gameResults[0][1] &&
    gameResults[0][1] === gameResults[0][2] &&
    gameResults[0][0] !== ""
  ) {
    removeEvents();
    console.log(`${currentPlayer} is the winner on row 1!`);
  } else if (
    gameResults[1][0] === gameResults[1][1] &&
    gameResults[1][1] === gameResults[1][2] &&
    gameResults[1][0] !== ""
  ) {
    console.log(`${currentPlayer} is the winner on row 2!`);
    removeEvents();
  } else if (
    gameResults[2][0] === gameResults[2][1] &&
    gameResults[2][1] === gameResults[2][2] &&
    gameResults[2][0] !== ""
  ) {
    console.log(`${currentPlayer} is the winner on row 3!`);
    removeEvents();
  } else if (
    gameResults[0][0] === gameResults[1][0] &&
    gameResults[1][0] === gameResults[2][0] &&
    gameResults[0][0] !== ""
  ) {
    console.log(`${currentPlayer} is the winner on column 1!`);
    removeEvents();
  } else if (
    gameResults[0][1] === gameResults[1][1] &&
    gameResults[1][1] === gameResults[2][1] &&
    gameResults[0][1] !== ""
  ) {
    console.log(`${currentPlayer} is the winner on column 2!`);
    removeEvents();
  } else if (
    gameResults[0][2] === gameResults[1][2] &&
    gameResults[1][2] === gameResults[2][2] &&
    gameResults[0][2] !== ""
  ) {
    console.log(`${currentPlayer} is the winner on column 3!`);
    removeEvents();
  } else if (
    gameResults[0][0] === gameResults[1][1] &&
    gameResults[1][1] === gameResults[2][2] &&
    gameResults[0][0] !== ""
  ) {
    console.log(`${currentPlayer} is the winner a diagonal!`);
    removeEvents();
  } else if (
    gameResults[0][2] === gameResults[1][1] &&
    gameResults[1][1] === gameResults[2][0] &&
    gameResults[0][2] !== ""
  ) {
    console.log(`${currentPlayer} is the winner a diagonal!`);
    removeEvents();
  } else {
    console.log("no winner yet");
  }
}
