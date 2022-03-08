import { BrowserRouter as Router } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';

import Layout from './index';

describe('Layout component', () => {
  test('renders "Home" and "Units" links', () => {
    render(
      <Router>
        <Layout />
      </Router>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Units')).toBeInTheDocument();
  });
});
