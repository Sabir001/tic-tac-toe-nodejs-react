import { RESET } from '../actions/constants';

const initialState = {
  message: 'Please click in a box to start',
  loading: false,
  gameOver: false,
  gridData: null,
  turn: 'X',
  gameLog: [],
};

export function ticTacToe(state: any, action: any): any {
  switch (action.type) {
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
}
