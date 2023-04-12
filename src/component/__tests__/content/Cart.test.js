it('No test', () => {});

{
  /*import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // optional
import userEvent from '@testing-library/user-event';
import { Cart } from '../../Content/Cart';
import CartContext from '../../Content/Cart';

let itemList = [
  {
    name: 'Book1',
    price: '$20',
    img: 'first-img',
    amount: 1,
    id: 1,
  },
];

const mockNoitems = [];

const setMockList = jest.fn();

describe('Cart component', () => {
  afterEach(cleanup);

  it('Renders correctly', () => {});

  it.skip('Renders item if cartList has items', () => {
    render(
      <CartContext.Provider value={[mockList, setMockList]}>
        <Cart />
      </CartContext.Provider>,
    );
    expect(screen.getByText('Book1')).toBeInTheDocument();
  });

  it.skip('Does not render items if carList has no items', () => {
    render(
      <CartContext.Provider value={[[], setMockList]}>
        <Cart />
      </CartContext.Provider>,
    );
    expect(screen.queryByText('Book1')).not.toBeInTheDocument();
  });

  describe('There are items', () => {
    it('Increments correctly', async () => {
      let mockList = itemList;
      const setMockList = (array) => {
        mockList = array;
      };
      const user = userEvent.setup();
      render(
        <CartContext.Provider value={[mockList, setMockList]}>
          <Cart />
        </CartContext.Provider>,
      );
      const btn = screen.getByRole('button', { name: '+' });
      await user.click(btn);
      expect(setMockList).toHaveBeenCalled;
      await user.click(btn);
      expect(setMockList).toHaveBeenCalledTimes(2);
    });

    it.skip('Decrements correctly', async () => {
      render(
        <CartContext.Provider value={[mockList, setMockList]}>
          <Cart />
        </CartContext.Provider>,
      );
      const user = userEvent.setup();
      const btn = screen.getByRole('button', { name: '+' });
      const btn2 = screen.getByRole('button', { name: '-' });
      await user.click(btn);
      expect(setMockList).toHaveBeenCalled;
      await user.click(btn);
      expect(setMockList).toHaveBeenCalledTimes(2);
    });

    it.skip('If item quantity <= 0, remove item', async () => {
      render(
        <CartContext.Provider value={[mockList, setMockList]}>
          <Cart />
        </CartContext.Provider>,
      );
      const user = userEvent.setup();
      const btn2 = screen.getByRole('button', { name: '-' });
      await user.click(btn2);
      expect(screen.getByText('Book1')).toBeInTheDocument();
    });

    it('Does not accept negative total value', () => {});
  });
});
*/
}
