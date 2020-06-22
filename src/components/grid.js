export const buildBoard = (height, width) => {
  let board = [];
  for (let i = 0; i < height; i++) {
    let row = [];
    for (var j = 0; j < width; j++) {
      let value = false;
      row.push({ status: value, newBorn: value });
    }
    board.push(row);
  }
  return board;
};

export const nextSlide = (board) => {
  // height is length of array
  // width is length of each nested array
  let boardHeight = board.length;
  let boardWidth = board.width;

  const activeNeighbours = (x, y) => {
    const topRow = x - 1 < 0 ? boardHeight - 1 : x - 1;
    const bottomRow = x + 1 === boardHeight ? 0 : x + 1;
    const leftColumn = y - 1 < 0 ? boardWidth - 1 : y - 1;
    const rightColumn = y + 1 === boardHeight ? 0 : y + 1;

    let neighbours = 0;
    neighbours += board[topRow][leftColumn].status;
    neighbours += board[topRow][y].status;
    neighbours += board[topRow][rightColumn].status;
    neighbours += board[x][leftColumn].status;
    neighbours += board[x][rightColumn].status;
    neighbours += board[bottomRow][leftColumn].status;
    neighbours += board[bottomRow][y].status;
    neighbours = board[bottomRow][rightColumn].status;

    return neighbours;
  };

  let newSlide = [];
  for (let i = 0; i < boardHeight; i++) {
    let row = [];
    for (let j = 0; j < boardWidth; j++) {
      let isActive = board[i][j].status;
      let neighbours = activeNeighbours(i, j);
      if (isActive) {
        if (neighbours > 3) {
          row.push({ status: 0 });
        } else if (neighbours < 2) {
          row.push({ status: 0 });
        } else {
          row.push({ status: 1 });
        }
      }
      if (!isActive) {
        if (neighbours === 3) {
          row.push({ status: 1 });
        } else {
          row.push({ status: 0 });
        }
      }
    }
    newSlide.push(row);
  }
  return newSlide;
};
