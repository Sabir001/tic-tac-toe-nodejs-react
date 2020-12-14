export const getGrid = (size: number): any => {
  const grid = [];
  for (let i = 0; i < size; i++) {
    grid.push(new Array(size).fill(null));
  }
  return grid;
};
