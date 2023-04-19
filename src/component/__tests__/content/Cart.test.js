import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // optional
import userEvent from '@testing-library/user-event';
import { Cart } from '../../Content/Cart';
import CartContext from '../../Content/Cart';

let itemList = [];

const mockNoitems = [];

function setMockList(item) {
  console.log(item);
  itemList = item;
}

describe('Cart component', () => {
  beforeEach(
    () =>
      (itemList = [
        {
          name: 'Book1',
          price: 20,
          dscription: '',
          img: 'first-img',
          amount: 1,
          id: 1,
        },
      ]),
  );
  afterEach(cleanup);

  it('Renders item if cartList has items', () => {
    render(
      <CartContext.Provider value={[itemList, setMockList]}>
        <Cart />
      </CartContext.Provider>,
    );
    expect(screen.getByText('Book1')).toBeInTheDocument();
  });

  it('Does not render items if carList has no items', () => {
    render(
      <CartContext.Provider value={[[], setMockList]}>
        <Cart />
      </CartContext.Provider>,
    );
    expect(screen.queryByText('Book1')).not.toBeInTheDocument();
  });

  describe('There are items', () => {
    it('Increments correctly', async () => {
      const user = userEvent.setup();
      render(
        <CartContext.Provider value={[itemList, setMockList]}>
          <Cart />
        </CartContext.Provider>,
      );
      const btn = screen.getByText('+');
      await user.click(btn);
      expect(itemList[0].amount).toBe(2);
      await user.click(btn);
      expect(itemList[0].amount).toBe(3);
    });

    it('Decrements correctly', async () => {
      render(
        <CartContext.Provider value={[itemList, setMockList]}>
          <Cart />
        </CartContext.Provider>,
      );
      const user = userEvent.setup();
      const btn = screen.getByText('+');
      const btn2 = screen.getByText('-');
      await user.click(btn);
      expect(itemList[0].amount).toBe(2);
      await user.click(btn2);
      expect(itemList[0].amount).toBe(1);
    });

    it('If item quantity <= 0, remove item', async () => {
      const { rerender } = render(
        <CartContext.Provider value={[itemList, setMockList]}>
          <Cart />
        </CartContext.Provider>,
      );
      const user = userEvent.setup();
      const btn2 = screen.getByText('-');
      await user.click(btn2);
      rerender(
        <CartContext.Provider value={[itemList, setMockList]}>
          <Cart />
        </CartContext.Provider>,
      );
      expect(screen.queryByText('Book1')).not.toBeInTheDocument();
    });

    it('Does not accept negative total value', () => {
      const negativeItemList = [
        {
          name: 'Book1',
          price: -20,
          dscription: '',
          img: 'first-img',
          amount: 1,
          id: 1,
        },
      ];
      render(
        <CartContext.Provider value={[negativeItemList, setMockList]}>
          <Cart />
        </CartContext.Provider>,
      );
      expect(screen.getByText('Total: $Error')).toBeInTheDocument();
    });
  });
});
