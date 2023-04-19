import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // optional
import userEvent from '@testing-library/user-event';
import CartContext from '../../Content/Cart';
import Item from '../../Content/Item';
import { BrowserRouter } from 'react-router-dom';
let mockItem = {
  id: 1,
  name: 'Book1',
  price: 20,
  img: 'first-img',
  description: 'Mocked description',
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: {
      item: mockItem,
    },
  }),
}));

const mockCart = [];
const addToMockCart = (item) => mockCart.push(item);

describe('Item Component', () => {
  afterEach(cleanup);
  describe('Received Information', () => {
    it('Renders correctly', () => {});

    it('Increments cart', async () => {
      const user = userEvent.setup();
      render(
        <BrowserRouter>
          <CartContext.Provider value={[mockCart, addToMockCart]}>
            <Item />
          </CartContext.Provider>
        </BrowserRouter>,
      );
      const button = screen.getByRole('button');

      await user.click(button);
      expect(mockCart).toHaveLength(1);
      await user.click(button);
      expect(mockCart).toHaveLength(2);
    });
  });
  test('No information received', () => {
    mockItem = [];
    render(
      <BrowserRouter>
        <CartContext.Provider value={[addToMockCart]}>
          <Item />
        </CartContext.Provider>
        ,
      </BrowserRouter>,
    );
    expect(screen.getByText('This item does not exist')).toBeInTheDocument();
  });
});
