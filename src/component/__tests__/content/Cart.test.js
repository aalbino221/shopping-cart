import React, { useContext, useState } from 'react';
import { cleanup, getByTestId, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // optional
import userEvent from '@testing-library/user-event';
import { Cart } from '../../Content/Cart';
import CartContext from '../../Content/Cart';
import { act } from 'react-dom/test-utils';

let mockList = [
  {
    name: 'Book1',
    price: '$20',
    img: 'first-img',
    amount: 1,
    id: 1,
  },
];

const setMockList = (array) => {
  mockList = array;
  console.log(mockList);
};

const mockNoitems = [];

describe('Cart component', () => {
  afterEach(cleanup);

  it('Renders correctly', () => {});

  it('Renders item if cartList has items', () => {
    render(
      <CartContext.Provider value={[mockList, setMockList]}>
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
      render(
        <CartContext.Provider value={[mockList, setMockList]}>
          <Cart />
        </CartContext.Provider>,
      );
      const user = userEvent.setup();
      const btn = screen.getByRole('button', { name: '+' });
      await act(async () => {
        await user.click(btn);
      });
      expect(mockList[0].amount).toBe(2);
      await act(async () => {
        await user.click(btn);
      });
      expect(screen.getByTestId('item-qnt').textContent).toBe('3');
    });
    it('Decrements correctly', async () => {
      render(
        <CartContext.Provider value={[mockList, setMockList]}>
          <Cart />
        </CartContext.Provider>,
      );
      const user = userEvent.setup();
      const btn = screen.getByRole('button', { name: '+' });
      const btn2 = screen.getByRole('button', { name: '-' });
      await user.click(btn);
      expect(mockList[0].amount).toBe('2');
      await user.click(btn2);
      expect(screen.getByTestId('item-qnt').textContent).toBe('1');
    });

    it('If item quantity <= 0, remove item', async () => {
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
