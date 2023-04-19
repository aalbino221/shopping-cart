import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'; // optional
import Home from '../../Content/Home';

describe('Home Component', () => {
  afterEach(cleanup);
  it('Renders correctly', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    expect(screen.getByText(/Best online bookstore/i)).toBeInTheDocument;
    expect(screen.getByRole('button')).toBeInTheDocument;
  });
});
