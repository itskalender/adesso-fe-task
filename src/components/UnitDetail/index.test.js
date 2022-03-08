import { Provider } from 'react-redux';

import { render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';

import units from '../../db/age-of-empires-units.json';
import UnitDetail from './index';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ unit: 'Archer' }),
}));

describe('UnitDetail component', () => {
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

  render(
    <Provider store={store}>
      <UnitDetail />
    </Provider>
  );

  test('renders unit detail', () => {
    expect(screen.getByText('Id')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Min. Required Age')).toBeInTheDocument();
    expect(screen.getByText('Wood Cost')).toBeInTheDocument();
    expect(screen.getByText('Food Cost')).toBeInTheDocument();
    expect(screen.getByText('Gold Cost')).toBeInTheDocument();
    expect(screen.getByText('Build Time')).toBeInTheDocument();
    expect(screen.getByText('Reload Time')).toBeInTheDocument();
    expect(screen.getByText('Hit Points')).toBeInTheDocument();
    expect(screen.getByText('Attack')).toBeInTheDocument();
    expect(screen.getByText('Accuracy')).toBeInTheDocument();
  });
});
