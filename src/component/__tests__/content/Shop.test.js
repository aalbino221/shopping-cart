import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // optional
import Shop from '../../Content/Shop';

jest.mock('../../Content/Shop/Card', () => ({ item }) => (
  <div data-testid={`card`} key={item.id} className="card">
    <span>{item.name}</span>
    <span>{item.price}</span>
  </div>
));

const mockItems = [
  { id: 1, name: 'Book1', price: '20$' },
  { id: 2, name: 'Book2', price: '20$' },
  { id: 3, name: 'Book3', price: '20$' },
];

const mockItemsNull = [
  { id: 1, name: 'Book1', price: null },
  { id: 2, name: 'Book2', price: null },
  1,
];

const mockItemNull = [{ id: null, name: null, price: null }];

describe('Shop Component', () => {
  afterEach(cleanup);

  describe('Quando há livros', () => {
    it('Renders Cards', () => {
      render(<Shop items={mockItems} />);
      expect(screen.queryAllByTestId('card').length).toBe(3);
    });
  });

  describe('Quando não há livros', () => {
    it('Does not render cards and shows `No items`', () => {
      render(<Shop items={[]} />);
      expect(screen.queryByRole('div')).not.toBeInTheDocument();
      expect(screen.queryByText('No items')).toBeInTheDocument();
    });
    it('Does not render if items is not an array', () => {
      render(<Shop items={1} />);
      expect(screen.queryByRole('div')).not.toBeInTheDocument();
      expect(screen.queryByText('No items')).toBeInTheDocument();
    });
    it('Does not render if an item isn`t an object, or have null properties', () => {
      render(<Shop items={mockItemsNull} />);
      screen.debug();
      expect(screen.queryAllByTestId('card').length).toBe(0);
      expect(screen.queryByText('No items')).toBeInTheDocument();
    });
    it('Does render `No items` if received all items have null or undefined properties', () => {
      render(<Shop items={mockItemNull} />);
      expect(screen.queryByRole('div')).not.toBeInTheDocument();
      expect(screen.queryByText('No items')).toBeInTheDocument();
    });
  });

});
