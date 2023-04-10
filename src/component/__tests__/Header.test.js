import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // optional
import userEvent from '@testing-library/user-event';
import Header from '../Footer';

describe('Header Component', () => {
  it('renders correct heading', () => {
    render(<Header />);
    expect(screen.getByRole('heading')).toBeInTheDocument;
    expect(screen.getByRole('list').lenght).toEqual(4);
  });
});
