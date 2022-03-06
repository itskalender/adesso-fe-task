import { AGE_CHANGE_STARTED, AGE_CHANGED } from '../../action-types';

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
