import { put } from 'redux-saga/effects';

import { changeRange, resetRange } from '../../action-creators';

export function* changeRangeSaga(action) {
  yield put(changeRange(action.payload.material, action.payload.range));
}

export function* resetRangeSaga(action) {
  yield put(resetRange(action.payload.material));
}
