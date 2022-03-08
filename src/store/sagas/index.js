import { takeLatest } from 'redux-saga/effects';

import {
  PAGE_TITLE_CHANGE_STARTED,
  RANGE_CHANGE_STARTED,
  RANGE_RESET_STARTED,
  AGE_CHANGE_STARTED,
} from '../action-types';

import { changePageTitleSaga } from './app';
import { changeAgeSaga } from './ages';
import { changeRangeSaga, resetRangeSaga } from './cost';

function* initSaga() {
  yield takeLatest(PAGE_TITLE_CHANGE_STARTED, changePageTitleSaga);
  yield takeLatest(AGE_CHANGE_STARTED, changeAgeSaga);
  yield takeLatest(RANGE_CHANGE_STARTED, changeRangeSaga);
  yield takeLatest(RANGE_RESET_STARTED, resetRangeSaga);
}

export default initSaga;
