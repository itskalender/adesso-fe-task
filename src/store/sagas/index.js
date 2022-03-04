import { put, takeEvery, takeLatest } from 'redux-saga/effects';

import {
  PAGE_TITLE_CHANGE_STARTED,
  RANGE_CHANGE_STARTED,
  RANGE_RESET_STARTED,
  AGE_CHANGE_STARTED,
} from '../actionTypes';

import {
  changePageTitle,
  changeAge,
  changeRange,
  resetRange,
} from '../actionCreators';

function* changePageTitleSaga(action) {
  yield put(changePageTitle(action.payload.pageTitle));
}

function* changeSelectedAgeSaga(action) {
  yield put(changeAge(action.payload.age));
}

function* changeRangeSaga(action) {
  yield put(changeRange(action.payload.material, action.payload.range));
}

function* resetRangeSaga(action) {
  yield put(resetRange(action.payload.material));
}

function* initSaga() {
  yield takeEvery(PAGE_TITLE_CHANGE_STARTED, changePageTitleSaga);
  yield takeEvery(AGE_CHANGE_STARTED, changeSelectedAgeSaga);
  yield takeLatest(RANGE_CHANGE_STARTED, changeRangeSaga);
  yield takeLatest(RANGE_RESET_STARTED, resetRangeSaga);
}

export default initSaga;
