import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // optional
import userEvent from '@testing-library/user-event';
import Home from '../../Content/Home';

describe('Home Component', () => {
  afterEach(cleanup);
  it('Renders correctly', () => {
    const { container } = render(<Home />);
    expect(screen.getByText(/Best online bookstore/i)).toBeInTheDocument;
    expect(screen.getByRole('button')).toBeInTheDocument;
    expect(screen.getByRole('img')).toBeInTheDocument;
  });
});
