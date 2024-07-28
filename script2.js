// scripts.js
let currentPlayer = 'X';
const gameBoard = Array(9).fill(null);
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);

function handleCellClick(event) {
    const cellIndex = event.target.dataset.index;
    if (gameBoard[cellIndex] || checkWin()) {
        return;
    }

    gameBoard[cellIndex] = currentPlayer;
    event.target.textContent = currentPlayer;
    if (checkWin()) {
        alert(`Player ${currentPlayer} wins!`);
    } else if (gameBoard.every(cell => cell)) {
        alert('It\'s a tie!');
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    return winPatterns.some(pattern => {
        return pattern.every(index => gameBoard[index] === currentPlayer);
    });
}

function resetGame() {
    gameBoard.fill(null);
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
}
