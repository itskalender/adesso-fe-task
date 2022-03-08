import { Provider } from 'react-redux';

import { render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';

import Home from './index';

describe('Home component', () => {
  const initialState = {};
  const mockStore = configureStore();

  test('shows Age of Empires logo', () => {
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(screen.getByAltText('Age of Empires Logo')).toBeInTheDocument();
  });
});
