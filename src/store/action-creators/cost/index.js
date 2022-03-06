import {
  RANGE_CHANGE_STARTED,
  RANGE_CHANGED,
  RANGE_RESET_STARTED,
  RANGE_RESET,
} from '../../action-types';

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
