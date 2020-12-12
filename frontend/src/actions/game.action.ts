import { HIDE_LOADING_MESSAGE, SHOW_LOADING_MESSAGE, RESET } from './constants';

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
