import { PAGE_TITLE_CHANGED } from './actionTypes';

export function changePageTitle(page) {
  return {
    type: PAGE_TITLE_CHANGED,
    payload: {
      page,
    },
  };
}
