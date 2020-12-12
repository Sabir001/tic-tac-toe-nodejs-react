import {
  HIDE_LOADING_MESSAGE,
  SHOW_LOADING_MESSAGE,
  RESET,
  GET_GAME_LOG,
  GET_GAME_STATE,
  TICK,
} from './constants';

export function showLoading() {
  return {
    type: SHOW_LOADING_MESSAGE,
  };
}

export function hideLoading() {
  return {
    type: HIDE_LOADING_MESSAGE,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}

export function getGameLog() {
  return {
    type: GET_GAME_LOG,
  };
}

export function getGameState() {
  return {
    type: GET_GAME_STATE,
  };
}

export function mark(value: any) {
  return {
    type: TICK,
    payload: value,
  };
}
