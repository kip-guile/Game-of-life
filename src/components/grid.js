export const buildBoard = (height, width, random = false) => {
  let board = {};
  for (let i = 0; i < height; i++) {
    let row = [];
    for (var j = 0; j < width; j++) {
      if (random) {
        row.push(Math.round(Math.random()));
      } else {
        row.push(0);
      }
    }
    board[i] = row;
  }
  return board;
};

export const nextSlide = (board = {}) => {
  // height is number of keys in object
  // width is length of each nested array
  let boardHeight = Object.keys(board).length;
  let boardWidth = board[0].length;

  const activeNeighbours = (x, y) => {
    const topRow = x - 1 < 0 ? boardHeight - 1 : x - 1;
    const bottomRow = x + 1 === boardHeight ? 0 : x + 1;
    const leftColumn = y - 1 < 0 ? boardWidth - 1 : y - 1;
    const rightColumn = y + 1 === boardHeight ? 0 : y + 1;

    let neighbours =
      board[topRow][leftColumn] +
      board[topRow][y] +
      board[topRow][rightColumn] +
      board[x][leftColumn] +
      board[x][rightColumn] +
      board[bottomRow][leftColumn] +
      board[bottomRow][y] +
      board[bottomRow][rightColumn];
    return neighbours;
  };

  let newSlide = {};
  for (let i = 0; i < boardHeight; i++) {
    let row = [];
    for (let j = 0; j < boardWidth; j++) {
      let isActive = board[i][j];
      let neighbours = activeNeighbours(i, j);
      if (isActive === 1) {
        if (neighbours < 2) {
          row.push(0);
        } else if (neighbours > 3) {
          row.push(0);
        } else {
          row.push(1);
        }
      }
      if (isActive === 0) {
        if (neighbours === 3) {
          row.push(1);
        } else {
          row.push(0);
        }
      }
    }
    newSlide[i] = row;
  }
  return newSlide;
};
