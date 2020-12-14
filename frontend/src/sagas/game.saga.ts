import { all, put, takeLatest } from 'redux-saga/effects';
import {
  RESET,
  RESET_SUCCESS,
  RESET_FAILURE,
  TICK,
  TICK_SUCCESS,
  TICK_FAILURE,
  GET_GAME_LOG,
  GET_GAME_LOG_SUCCESS,
  GET_GAME_LOG_FAILURE,
  GET_GAME_STATE,
  GET_GAME_STATE_SUCCESS,
  GET_GAME_STATE_FAILURE,
} from '../actions/constants';
import { defaultApi } from '../utils/axiosApi';

function* resetGame() {
  const endpoint = `${process.env.REACT_APP_API_BASE_URL}/reset`;
  const { response, error } = yield defaultApi(endpoint, 'GET');
  if (response) {
    yield put({
      type: RESET_SUCCESS,
      data: response?.data,
    });
  } else {
    yield put({
      type: RESET_FAILURE,
      error,
    });
  }
}

function* tick({ payload }: any) {
  const endpoint = `${process.env.REACT_APP_API_BASE_URL}/tick?x=${payload.xAxis}&y=${payload.yAxis}`;
  const { response, error } = yield defaultApi(endpoint, 'GET');
  if (response) {
    yield put({
      type: TICK_SUCCESS,
      data: response?.data,
    });
  } else {
    yield put({
      type: TICK_FAILURE,
      error,
    });
  }
}

function* getLog() {
  const endpoint = `${process.env.REACT_APP_API_BASE_URL}/game-log`;
  const { response, error } = yield defaultApi(endpoint, 'GET');
  if (response) {
    yield put({
      type: GET_GAME_LOG_SUCCESS,
      data: response?.data,
    });
  } else {
    yield put({
      type: GET_GAME_LOG_FAILURE,
      error,
    });
  }
}

function* getState() {
  const endpoint = `${process.env.REACT_APP_API_BASE_URL}/game-state`;
  const { response, error } = yield defaultApi(endpoint, 'GET');
  if (response) {
    yield put({
      type: GET_GAME_STATE_SUCCESS,
      data: response?.data,
    });
  } else {
    yield put({
      type: GET_GAME_STATE_FAILURE,
      error,
    });
  }
}

function* reset() {
  yield takeLatest(RESET, resetGame);
}

function* clickCell() {
  yield takeLatest(TICK, tick);
}

function* log() {
  yield takeLatest(GET_GAME_LOG, getLog);
}

function* state() {
  yield takeLatest(GET_GAME_STATE, getState);
}

export function* rootSaga() {
  yield all([reset(), clickCell(), state(), log()]);
}
