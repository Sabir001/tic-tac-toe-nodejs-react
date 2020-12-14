import {
  RESET_SUCCESS,
  TICK_SUCCESS,
  GET_GAME_STATE_SUCCESS,
  GET_GAME_LOG_SUCCESS,
} from '../actions/constants';

const initialState = {
  message: 'Please click in a box to start',
  loading: false,
  gameOver: false,
  gridData: null,
  turn: 'X',
  gameLog: [],
};

export function ticTacToe(state: any = initialState, action: any): any {
  switch (action.type) {
    case RESET_SUCCESS:
      return { ...initialState };
    case TICK_SUCCESS:
      return {
        ...state,
        ...action.data,
        turnFor: state.turnFor === 'X' ? 'O' : 'X',
      };
    case GET_GAME_STATE_SUCCESS:
      return { ...state, ...action.data };
    case GET_GAME_LOG_SUCCESS:
      return { ...state, gameLog: action.data.log };
    default:
      return state;
  }
}
