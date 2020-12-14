import { all, put, takeLatest } from 'redux-saga/effects';
import {
  RESET,
  RESET_SUCCESS,
  RESET_FAILURE,
  TICK,
  TICK_SUCCESS,
  TICK_FAILURE,
} from '../actions/constants';
import { defaultApi } from '../utils/axiosApi';

function* resetGame() {
  const endpoint = `${process.env.REACT_APP_API_BASE_URL}/reset`;
  const { response, error } = yield defaultApi(endpoint, 'GET');
  if (response) {
    yield put({
      type: RESET_SUCCESS,
      response,
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
  console.log(response, error);
  if (response) {
    yield put({
      type: TICK_SUCCESS,
      response,
    });
  } else {
    yield put({
      type: TICK_FAILURE,
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

export function* rootSaga() {
  yield all([reset(), clickCell()]);
}
