import { combineReducers } from "redux";
import * as grid from "../components/grid";

const initialBoard = grid.buildBoard(30, 30);
console.log(initialBoard);

const boardReducer = (state = initialBoard, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case "SWITCH":
      let x = action.payload.x;
      let y = action.payload.y;
      let board = state;
      let cell = board[x][y];
      // console.log(cell);
      if (cell.status === 0) {
        cell.status = 1;
      } else {
        cell.status = 0;
      }
      return board;
    case "SLIDE":
      return grid.nextSlide(state);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  board: boardReducer,
});

export default rootReducer;
