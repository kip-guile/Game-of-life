import { combineReducers } from "redux";
import * as grid from "../components/grid";

const initialBoard = grid.buildBoard(25, 50);

const boardReducer = (state = initialBoard, action) => {
  switch (action.type) {
    case "SWITCH":
      let board = [];
      for (let i = 0; i < state.length; i++) {
        board.push(state[i]);
      }
      let cell = board[action.payload.x][action.payload.y];
      cell.status = !cell.status;
      // cell.newBorn = !cell.newBorn;
      return board;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  board: boardReducer,
});

export default rootReducer;
