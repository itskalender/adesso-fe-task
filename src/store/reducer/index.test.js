import units from '../../db/age-of-empires-units.json';
import reducer from './index';

describe('Reducer function', () => {
  const initialState = {
    units: units.units,
    currentState: {
      pageTitle: 'Home',
      filters: {
        age: 'All',
        costs: {
          wood: [0, 200],
          food: [100, 200],
          gold: [0, 200],
        },
      },
    },
  };

  test('should immutably update pageTitle if action type is "PAGE_TITLE_CHANGED"', () => {
    const action = {
      type: 'PAGE_TITLE_CHANGED',
      payload: { pageTitle: 'Units' },
    };

    const updatedState = reducer(initialState, action);

    expect(updatedState.currentState.pageTitle).toEqual(
      action.payload.pageTitle
    );
  });

  test('should immutably update age if action type is "AGE_CHANGED"', () => {
    const action = {
      type: 'AGE_CHANGED',
      payload: { age: 'Imperial' },
    };

    const updatedState = reducer(initialState, action);

    expect(updatedState.currentState.filters.age).toEqual(action.payload.age);
  });

  test('should immutably update cost range if action type is "RANGE_CHANGED"', () => {
    const action = {
      type: 'RANGE_CHANGED',
      payload: { material: 'wood', range: [100, 150] },
    };

    const updatedState = reducer(initialState, action);

    expect(
      updatedState.currentState.filters.costs[action.payload.material]
    ).toEqual(action.payload.range);
  });

  test('should immutably reset cost range if action type is "RANGE_RESET"', () => {
    const action = {
      type: 'RANGE_RESET',
      payload: { material: 'food' },
    };

    const updatedState = reducer(initialState, action);

    expect(
      updatedState.currentState.filters.costs[action.payload.material]
    ).toEqual([0, 200]);
  });
});
