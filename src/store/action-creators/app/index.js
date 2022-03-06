import {
  PAGE_TITLE_CHANGE_STARTED,
  PAGE_TITLE_CHANGED,
} from '../../action-types';

export function startPageTitleChange(pageTitle) {
  return {
    type: PAGE_TITLE_CHANGE_STARTED,
    payload: {
      pageTitle,
    },
  };
}

export function changePageTitle(pageTitle) {
  return {
    type: PAGE_TITLE_CHANGED,
    payload: {
      pageTitle,
    },
  };
}
