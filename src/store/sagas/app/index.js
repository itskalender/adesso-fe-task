import { put } from 'redux-saga/effects';

import { changePageTitle } from '../../action-creators';

export function* changePageTitleSaga(action) {
  yield put(changePageTitle(action.payload.pageTitle));
}
