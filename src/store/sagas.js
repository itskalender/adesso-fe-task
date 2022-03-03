import { put, takeEvery } from 'redux-saga/effects';

function* changePage(action) {
  yield put({ type: 'PAGE_CHANGED', page: action.payload.page });
}

function* initSaga() {
  yield takeEvery('PAGE_CHANGED', changePage);
}

export default initSaga;
