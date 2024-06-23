let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function cellClicked(index) {
  if (gameActive && board[index] === '') {
    board[index] = currentPlayer;
    document.getElementById(`cell${index}`).innerText = currentPlayer;
    checkResult();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById('message').innerText = `Player ${currentPlayer}'s Turn`;
  }
}

function checkResult() {
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      document.getElementById('message').innerText = `Player ${board[a]} Wins!`;
      gameActive = false;
      highlightWinningCells(a, b, c);
      return;
    }
  }
  if (!board.includes('')) {
    document.getElementById('message').innerText = `It's a Tie!`;
    gameActive = false;
  }
}

function highlightWinningCells(a, b, c) {
  document.getElementById(`cell${a}`).classList.add('winner');
  document.getElementById(`cell${b}`).classList.add('winner');
  document.getElementById(`cell${c}`).classList.add('winner');
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  document.getElementById('message').innerText = `Player X's Turn`;
  for (let i = 0; i < 9; i++) {
    document.getElementById(`cell${i}`).innerText = '';
    document.getElementById(`cell${i}`).classList.remove('winner');
  }
}
