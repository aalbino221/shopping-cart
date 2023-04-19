import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // optional
import Footer from '../Footer';

describe('Footer Component', () => {
  it('Renders Correctly', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
