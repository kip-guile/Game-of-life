// count cells
export const cellcount = (board) => {
  let boardHeight = Object.keys(board).length;
  let boardWidth = board[0].length;
  let alivecount = 0;
  let deadcount = 0;
  for (let i = 0; i < boardHeight; i++) {
    for (let j = 0; j < boardWidth; j++) {
      if (board[i][j] === 1) {
        alivecount += 1;
      } else {
        deadcount += 1;
      }
    }
  }
  return [alivecount, deadcount];
};
