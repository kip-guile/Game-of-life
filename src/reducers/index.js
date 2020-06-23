import { combineReducers } from "redux";
import * as grid from "../components/grid";

const initialBoard = grid.buildBoard(30, 30);

const boardReducer = (state = initialBoard, action) => {
  switch (action.type) {
    case "SWITCH":
      let board = state.slice(0);
      // for (let i = 0; i < state.length; i++) {
      //   board.push(state[i]);
      // }
      let cell = board[action.payload.x][action.payload.y];
      if (!cell.status) {
        cell.status = 1;
      } else {
        cell.status = 0;
      }
      return board;
    case "SLIDE":
      return grid.nextSlide(state.slice(0));
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  board: boardReducer,
});

export default rootReducer;
