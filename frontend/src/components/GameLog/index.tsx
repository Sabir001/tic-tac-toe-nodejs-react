import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getGameLog } from '../../actions/game.action';
import styled from 'styled-components';

const LogArea = styled.div`
  padding: 10px;
  background: rgba(100, 100, 100, 0.1);

  div {
    font-size: 16px;
  }
`;

export const GameLog = ({ gameLog, getLog }: any) => {
  useEffect(() => {
    getLog();
  }, []);

  if (!gameLog || gameLog.length === 0) {
    return <></>;
  }

  return (
    <LogArea>
      {gameLog.map((log: any, index: number) => (
        <div key={index}>{log}</div>
      ))}
    </LogArea>
  );
};

const mapStateToProps = (state: any) => {
  return {
    gameLog: state.gameLog,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getLog: () => dispatch(getGameLog()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameLog);
