export const buildBoard = (height, width) => {
  let board = {};
  for (let i = 0; i < height; i++) {
    let row = [];
    for (var j = 0; j < width; j++) {
      //   let value = 0;
      row.push(0);
    }
    board[i] = row;
    // board.push(row);
  }
  return board;
};

export const nextSlide = (board = {}) => {
  // height is length of array
  // width is length of each nested array
  //   let boardHeight = board.length;
  let boardHeight = Object.keys(board).length;
  let boardWidth = board[0].length;

  const activeNeighbours = (x, y) => {
    const topRow = x - 1 < 0 ? boardHeight - 1 : x - 1;
    const bottomRow = x + 1 === boardHeight ? 0 : x + 1;
    const leftColumn = y - 1 < 0 ? boardWidth - 1 : y - 1;
    const rightColumn = y + 1 === boardHeight ? 0 : y + 1;

    let neighbours =
      board[topRow][leftColumn].status +
      board[topRow][y].status +
      board[topRow][rightColumn].status +
      board[x][leftColumn].status +
      board[x][rightColumn].status +
      board[bottomRow][leftColumn].status +
      board[bottomRow][y].status +
      board[bottomRow][rightColumn].status;
    return neighbours;
  };

  let newSlide = {};
  for (let i = 0; i < boardHeight; i++) {
    let row = [];
    for (let j = 0; j < boardWidth; j++) {
      let isActive = board[i][j].status;
      let neighbours = activeNeighbours(i, j);
      if (isActive === 1) {
        if (neighbours < 2) {
          row.push({ status: 0 });
        } else if (neighbours > 3) {
          row.push({ status: 0 });
        } else {
          row.push({ status: 1 });
        }
      }
      if (isActive === 0) {
        if (neighbours === 3) {
          row.push({ status: 1 });
        } else {
          row.push({ status: 0 });
        }
      }
    }
    newSlide.i = row;
    // newSlide.push(row);
  }
  return newSlide;
};
