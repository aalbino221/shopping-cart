import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'; // optional
import Shop from '../../Content/Shop';

jest.mock('../../Content/Shop/Card', () => ({ item }) => (
  <div data-testid={`card`} key={item.id} className="card">
    <span>{item.name}</span>
    <span>{item.price}</span>
  </div>
));

const mockItems = [
  { id: 1, name: 'Book1', price: 20, description: '', img: 'img', amount: 1 },
  { id: 2, name: 'Book2', price: 20, description: '', img: 'img', amount: 1 },
  { id: 3, name: 'Book3', price: 20, description: '', img: 'img', amount: 1 },
];

describe('Shop Component', () => {
  afterEach(cleanup);

  describe('Quando há livros', () => {
    it('Renders Cards', () => {
      render(
        <BrowserRouter>
          <Shop items={mockItems} />
        </BrowserRouter>,
      );
      expect(screen.queryAllByTestId('card').length).toBe(3);
    });
  });

  describe('Quando não há livros', () => {
    it('Does not render cards and shows `No items`', () => {
      render(
        <BrowserRouter>
          <Shop items={[]} />
        </BrowserRouter>,
      );
      expect(screen.queryByRole('div')).not.toBeInTheDocument();
      expect(screen.queryByText('No Items')).toBeInTheDocument();
    });
    it('Does not render if items is not an array', () => {
      render(
        <BrowserRouter>
          <Shop items={1} />
        </BrowserRouter>,
      );
      expect(screen.queryByRole('div')).not.toBeInTheDocument();
      expect(screen.queryByText('No Items')).toBeInTheDocument();
    });
  });
});
