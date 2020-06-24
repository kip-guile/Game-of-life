import { stopPlay } from "../actions";

// count cells
export const cellcount = (board, play) => {
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
  if (alivecount === 0) {
    clearInterval(play);
    // stopPlay();
  }
  return [alivecount, deadcount];
};
// .....

// play button function
export const togglePlay = (play, nextSlide, playNow, stopPlay) => {
  if (play.playing === false) {
    const label = setInterval(nextSlide, 500);
    playNow(label);
  } else {
    clearInterval(play.label);
    stopPlay();
  }
};

// stop button function
export const stopPlayFxn = (play, stopPlay) => {
  clearInterval(play.label);
  stopPlay();
};

// fastforward button function
// closure starts -------------------------
export const withClosure = (play, nextSlide, playNow) => {
  let newSPeed = 500;
  const fast = () => {
    newSPeed /= 3;
    // clear interval before increasing speed
    if (play.label) {
      clearInterval(play.label);
    }
    const label = setInterval(nextSlide, newSPeed);
    playNow(label);
  };
  return fast;
};

// closure ends
// ---------------------------------------------
