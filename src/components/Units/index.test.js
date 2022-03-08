import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';

import units from '../../db/age-of-empires-units.json';
import Units from './index';

describe('Units component', () => {
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
  const mockStore = configureStore();
  const store = mockStore(initialState);

  test('renders "Ages" component', () => {
    render(
      <Provider store={store}>
        <Router>
          <Units />
        </Router>
      </Provider>
    );

    expect(screen.getByText('Ages')).toBeInTheDocument();
  });

  test('renders "Costs" component', () => {
    render(
      <Provider store={store}>
        <Router>
          <Units />
        </Router>
      </Provider>
    );

    expect(screen.getByAltText('Wood')).toBeInTheDocument();
    expect(screen.getByAltText('Food')).toBeInTheDocument();
    expect(screen.getByAltText('Gold')).toBeInTheDocument();
  });

  test('renders "List" component', () => {
    render(
      <Provider store={store}>
        <Router>
          <Units />
        </Router>
      </Provider>
    );

    expect(screen.getByText('List')).toBeInTheDocument();
  });
});
