import { combineReducers } from "redux";
import * as grid from "../components/grid";

const initialBoard = grid.buildBoard(30, 30);

const boardReducer = (state = initialBoard, action) => {
  switch (action.type) {
    case "SWITCH":
      let x = action.payload.x;
      let y = action.payload.y;
      let board = { ...state };
      let cell = board[x][y];
      if (cell === 0) {
        board[x][y] = 1;
      } else {
        board[x][y] = 0;
      }
      return board;
    case "SLIDE":
      return grid.nextSlide({ ...state });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  board: boardReducer,
});

export default rootReducer;
