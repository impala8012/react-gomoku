// function countPiece(board, currentX, currentY, directionX, directionY) {
//   const newBoard = board[currentY][currentX];
//   let tempX = currentX;
//   let tempY = currentY;
//   let total = 0;

//   while (total < 5) {
//     tempX += directionX;
//     tempY += directionY;
//     // 判斷有否超出棋盤
//     if (tempX < 0 || tempX > 18 || tempY < 0 || tempY > 18) return;
//     if (board[tempY][tempX] === newBoard) {
//       total++;
//     }
//   }
//   return total;
// }

// const findWinner = (board, x, y) => {
//   if (
//     // 橫排檢查
//     countPiece(board, x, y, 1, 0) + countPiece(board, x, y, -1, 0) >= 4 ||
//     // 直排檢查
//     countPiece(board, x, y, 0, 1) + countPiece(board, x, y, 0, -1) >= 4 ||
//     // 左上到右下檢查
//     countPiece(board, x, y, 1, 1) + countPiece(board, x, y, -1, -1) >= 4 ||
//     // 右上到左下檢查
//     countPiece(board, x, y, 1, -1) + countPiece(board, x, y, -1, 1) >= 4
//   ) {
//     return board[y][x];
//   }
// };

// export default findWinner;

const findWinner = (board) => {
  // 橫排檢查
  for (let i = 0; i < 19; i++) {
    for (let j = 0; j < board.length - 4; j++) {
      if (
        board[i][j] !== null &&
        board[i][j] === board[i][j + 1] &&
        board[i][j + 1] === board[i][j + 2] &&
        board[i][j + 2] === board[i][j + 3] &&
        board[i][j + 3] === board[i][j + 4]
      ) {
        return board[i][j];
      }
    }
  }

  // 直排檢查
  for (let i = 0; i < board.length - 4; i++) {
    for (let j = 0; j < 19; j++) {
      if (
        board[i][j] !== null &&
        board[i][j] === board[i + 1][j] &&
        board[i + 1][j] === board[i + 2][j] &&
        board[i + 2][j] === board[i + 3][j] &&
        board[i + 3][j] === board[i + 4][j]
      ) {
        return board[i][j];
      }
    }
  }

  // 左上到右下檢查
  for (let i = 0; i < board.length - 4; i++) {
    for (let j = 0; j < board.length - 4; j++) {
      if (
        board[i][j] !== null &&
        board[i][j] === board[i + 1][j + 1] &&
        board[i + 1][j + 1] === board[i + 2][j + 2] &&
        board[i + 2][j + 2] === board[i + 3][j + 3] &&
        board[i + 3][j + 3] === board[i + 4][j + 4]
      ) {
        return board[i][j];
      }
    }
  }

  // 右上到左下檢查
  for (let i = 4; i < 19; i++) {
    for (let j = 0; j < 15; j++) {
      if (
        board[i][j] !== null &&
        board[i][j] === board[i - 1][j + 1] &&
        board[i - 1][j + 1] === board[i - 2][j + 2] &&
        board[i - 2][j + 2] === board[i - 3][j + 3] &&
        board[i - 3][j + 3] === board[i - 4][j + 4]
      ) {
        return board[i][j];
      }
    }
  }
};

export default findWinner;
