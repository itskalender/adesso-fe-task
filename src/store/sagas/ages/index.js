import { put } from 'redux-saga/effects';

import { changeAge } from '../../action-creators';

export function* changeAgeSaga(action) {
  yield put(changeAge(action.payload.age));
}
