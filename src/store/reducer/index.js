import units from '../../db/age-of-empires-units.json';

import {
  PAGE_TITLE_CHANGED,
  AGE_CHANGED,
  RANGE_CHANGED,
  RANGE_RESET,
} from '../actionTypes';

const initialState = {
  units: units.units,
  currentState: {
    pageTitle: 'Home Page',
    filters: {
      age: 'All',
      costs: {
        wood: [0, 200],
        food: [0, 200],
        gold: [0, 200],
      },
    },
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case PAGE_TITLE_CHANGED: {
      return {
        ...state,
        currentState: {
          ...state.currentState,
          pageTitle: action.payload.pageTitle,
        },
      };
    }
    case AGE_CHANGED: {
      return {
        ...state,
        currentState: {
          ...state.currentState,
          filters: {
            ...state.currentState.filters,
            age: action.payload.age,
          },
        },
      };
    }
    case RANGE_CHANGED: {
      return {
        ...state,
        currentState: {
          ...state.currentState,
          filters: {
            ...state.currentState.filters,
            costs: {
              ...state.currentState.filters.costs,
              [action.payload.material]: action.payload.range,
            },
          },
        },
      };
    }
    case RANGE_RESET: {
      return {
        ...state,
        currentState: {
          ...state.currentState,
          filters: {
            ...state.currentState.filters,
            costs: {
              ...state.currentState.filters.costs,
              [action.payload.material]: [0, 200],
            },
          },
        },
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
