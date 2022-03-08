import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';

import units from './db/age-of-empires-units.json';
import App from './App';

describe('App component', () => {
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

  test('renders correct content', () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    expect(screen.getByRole('main')).not.toBeEmptyDOMElement();
  });
});
