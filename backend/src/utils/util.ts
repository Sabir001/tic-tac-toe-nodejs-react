export const isEmpty = (value: any): boolean => {
  if (value === null) {
    return true;
  } else if (typeof value !== 'number' && value === '') {
    return true;
  } else if (value === 'undefined' || value === undefined) {
    return true;
  } else if (value !== null && typeof value === 'object' && !Object.keys(value).length) {
    return true;
  } else {
    return false;
  }
};

export const getResponseData = (message: string, gameBoard: any, log: string[]): any => {
  const gameOver = gameBoard.isGameOver();
  let msg = message;
  if (gameOver) {
    const winner = gameBoard.getWinner();
    msg = winner === null ? 'Match Drawn' : `${winner} won the match!`;
  }
  return {
    message: msg,
    gameOver,
    gridData: gameBoard.getBoardGrid(),
    gameLog: log,
  };
};
