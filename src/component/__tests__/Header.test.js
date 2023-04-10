import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // optional
import userEvent from '@testing-library/user-event';
import Header from '../Header';

describe('Header Component', () => {
  it('renders correct heading', () => {
    const { container } = render(<Header />);
    expect(screen.getByRole('heading')).toBeInTheDocument;
    expect(screen.getAllByRole('listitem')).toHaveLength(4);
    expect(container).toMatchSnapshot();
  });
});
