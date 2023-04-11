import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // optional
import userEvent from '@testing-library/user-event';
import CartContext from '../../Content/Cart';
import Item from '../../Content/Item';

const mockItem = {
  name: 'Book1',
  price: '$20',
  img: 'first-img',
};

const mockCart = [];
const addToMockCart = (item) => mockCart.push(item);

describe('Item Component', () => {
  afterEach(cleanup);
  describe('Received Information', () => {
    it('Renders correctly', () => {});

    it('Increments cart', async () => {
      const user = userEvent.setup();
      render(
        <CartContext.Provider value={[addToMockCart]}>
          <Item item={mockItem} />
        </CartContext.Provider>,
      );
      const button = screen.getByRole('button');

      await user.click(button);
      expect(mockCart).toHaveLength(1);
      await user.click(button);
      expect(mockCart).toHaveLength(2);
    });
  });
  test('No information received', () => {
    render(
      <CartContext.Provider value={[addToMockCart]}>
        <Item item={[]} />
      </CartContext.Provider>,
    );
    expect(screen.getByText('This item does not exist')).toBeInTheDocument();
  });
});
