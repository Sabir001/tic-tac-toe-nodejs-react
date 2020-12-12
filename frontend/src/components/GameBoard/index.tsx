import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getGameState, mark, reset } from '../../actions/game.action';
import GameCell from '../GameCell';

const Board = styled.div`
  .game-board {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 320px;
    height: 320px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
    background-color: white;
    padding: 3px 2px 0px 3px;
    align-items: center;
  }
`;

function Grid({ getGameState, grid, gameOver, owner, mark, reset }: any) {
  useEffect(() => {
    getGameState();
  }, [getGameState]);

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
      <Board>
        <button onClick={() => reset()}>Restart!</button>
      </Board>
    );
  }

  return (
    <Board>
      <div className="game-board">{generateGameBoard(3)}</div>
    </Board>
  );
}

const mapStateToProps = (state: any) => {
  return {
    loading: state.loading,
    owner: state.turn,
    gameOver: state.gameOver,
    grid: state.gridData,
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
