import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // optional
import Contact from '../../Content/Contact';

describe('Contact Component', () => {
  it('Renders Correctly', () => {
    const { container } = render(<Contact />);
    expect(container).toMatchSnapshot();
  });
});
