import {
  PAGE_TITLE_CHANGE_STARTED,
  PAGE_TITLE_CHANGED,
  AGE_CHANGED,
  AGE_CHANGE_STARTED,
  RANGE_CHANGE_STARTED,
  RANGE_CHANGED,
  RANGE_RESET_STARTED,
  RANGE_RESET,
} from '../actionTypes';

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

export function startAgeChange(age) {
  return {
    type: AGE_CHANGE_STARTED,
    payload: {
      age,
    },
  };
}

export function changeAge(age) {
  return {
    type: AGE_CHANGED,
    payload: {
      age,
    },
  };
}

export function startRangeChange(material, range) {
  return {
    type: RANGE_CHANGE_STARTED,
    payload: {
      material,
      range,
    },
  };
}

export function changeRange(material, range) {
  return {
    type: RANGE_CHANGED,
    payload: {
      material,
      range,
    },
  };
}

export function startRangeReset(material) {
  return {
    type: RANGE_RESET_STARTED,
    payload: {
      material,
    },
  };
}

export function resetRange(material) {
  return {
    type: RANGE_RESET,
    payload: {
      material,
    },
  };
}
