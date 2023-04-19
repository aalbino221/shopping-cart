import React, { useState } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // optional
import userEvent from '@testing-library/user-event';
import CartContext from '../../Content/Cart';
import Card from '../../Content/Shop/Card';

const mockItem = {
  id: 1,
  amount: 1,
  description: '',
  name: 'Book1',
  price: 20,
  img: 'first-img',
};

let mockCart = [];
function addToMockCart(item) {
  mockCart = item;
}

describe('Card Component', () => {
  afterEach(cleanup);

  describe('Received info', () => {
    it('Does render', () => {
      render(
        <CartContext.Provider value={[mockCart, addToMockCart]}>
          <Card item={mockItem} />
        </CartContext.Provider>,
      );
      expect(screen.getByText('Book1')).toBeInTheDocument();
      expect(screen.getByText('$20.00')).toBeInTheDocument();
      expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('Increments cart', async () => {
      const user = userEvent.setup();

      const { rerender } = render(
        <CartContext.Provider value={[mockCart, addToMockCart]}>
          <Card item={mockItem} />
        </CartContext.Provider>,
      );
      const button = screen.getByRole('button');

      await user.click(button);
      expect(mockCart).toHaveLength(1);

      rerender(
        <CartContext.Provider value={[mockCart, addToMockCart]}>
          <Card item={mockItem} />
        </CartContext.Provider>,
      );

      await user.click(button);
      expect(mockCart[0].amount).toBe(2);
    });
  });

  describe('No info received', () => {
    it('Does not render', () => {
      render(
        <CartContext.Provider value={[mockCart, addToMockCart]}>
          <Card item={[]} />
        </CartContext.Provider>,
      );
      expect(screen.queryAllByText('Book1')).toHaveLength(0);
    });
  });
});
