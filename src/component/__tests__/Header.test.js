import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'; // optional
import Header from '../Header';

const handleCart = jest.fn();
const itemList = [];

describe('Header Component', () => {
  it('renders correct heading', () => {
    const { container } = render(
      <BrowserRouter>
        <Header handleCart={handleCart} itemList={itemList} />
      </BrowserRouter>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument;
    expect(screen.getAllByRole('listitem')).toHaveLength(4);
    expect(container).toMatchSnapshot();
  });
});
