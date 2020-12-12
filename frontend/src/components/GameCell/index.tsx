import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Cell = styled.div`
  flex: 0 0 32%;
  height: 100px;
  width: 37px;
  margin-bottom: 5px;
  background-color: #ccc;
  text-align: center;

  span {
    font-size: 60px;
    line-height: 95px;
    color: #0a0a0a;
  }
`;

function GameCell({ takenBy, click, xAxis, yAxis, owner }: any) {
  const [cellTakenBy, setTakenBy] = useState(null);

  useEffect(() => {
    setTakenBy(takenBy);
  }, []);

  const markHandler = (xAxis: number, yAxis: number, owner: any) => {
    setTakenBy(owner);
    click(xAxis, yAxis);
  };

  return (
    <Cell onClick={() => !cellTakenBy && markHandler(xAxis, yAxis, owner)}>
      {takenBy && <span>{owner}</span>}
    </Cell>
  );
}

export default GameCell;
