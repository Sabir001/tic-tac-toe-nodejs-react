import { all, put, takeLatest } from 'redux-saga/effects';
import { RESET, RESET_SUCCESS, RESET_FAILURE } from '../actions/constants';
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

function* reset() {
  yield takeLatest(RESET, resetGame);
}

export function* rootSaga() {
  yield all([reset()]);
}
