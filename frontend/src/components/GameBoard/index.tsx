import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { mark, getGameState, reset } from '../../actions/game.action';

import GameCell from '../GameCell';

function Grid({ getGameState, grid, gameOver, owner, mark, reset }: any) {
  useEffect(() => {
    getGameState();
  }, []);

  const getCellOwner = (xAxis: number, yAxis: number) => {
    if (grid !== null) {
      return grid[yAxis][xAxis];
    }
    return null;
  };

  const generateGameBoard = (size: number) => {
    const gameBoard = [];
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        gameBoard.push(
          <GameCell
            xAxis={x}
            yAxis={y}
            owner={owner}
            click={mark}
            key={`${x} - ${y}`}
            takenBy={getCellOwner(x, y)}
          />
        );
      }
    }
    return gameBoard;
  };

  if (gameOver) {
    return (
      <div>
        <button onClick={() => reset()}>Restart!</button>
      </div>
    );
  }

  return <div>{generateGameBoard(3)}</div>;
}

const mapStateToProps = (state: any) => {
  return {
    loading: state.ticTacToe.loading,
    owner: state.ticTacToe.turn,
    gameOver: state.ticTacToe.gameOver,
    grid: state.ticTacToe.gridData,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getGameState: () => dispatch(getGameState()),
    mark: (value: any) => dispatch(mark(value)),
    reset: () => dispatch(reset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
