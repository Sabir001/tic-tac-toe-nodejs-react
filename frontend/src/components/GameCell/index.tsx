import React from 'react';

function GameCell({ takenBy, click, xAxis, yAxis }: any) {
  const markHandler = (xAxis: number, yAxis: number) => {
    click(xAxis, yAxis);
  };

  return (
    <div onClick={() => markHandler(xAxis, yAxis)}>
      {takenBy && <span>{takenBy}</span>}
    </div>
  );
}

export default GameCell;
