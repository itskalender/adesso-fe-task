import units from '../db/age-of-empires-units.json';

import { PAGE_TITLE_CHANGED } from './actionTypes';

const initialState = {
  units: units.units,
  currentState: {
    filters: {
      age: 'All',
      costs: {
        wood: [0, 200],
        food: [0, 200],
        gold: [0, 200],
      },
    },
    page: 'Home Page',
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case PAGE_TITLE_CHANGED: {
      return {
        ...state,
        currentState: {
          ...state.currentState,
          page: action.payload.page,
        },
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
