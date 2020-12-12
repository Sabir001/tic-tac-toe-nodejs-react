import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getGameLog } from '../../actions/game.action';

export const GameLog = ({ gameLog, getLog }: any) => {
  useEffect(() => {
    getLog();
  }, []);

  return (
    <div>
      <div>
        {gameLog &&
          gameLog.map((log: any, index: number) => (
            <div key={index}>{log.message}</div>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  gameLog: state.ticTacToe.gameLog,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    getLog: () => dispatch(getGameLog()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameLog);
