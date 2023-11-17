import React from 'react';
import { render } from '@testing-library/react';
import Contact from './contacts';

describe('Contact component', () => {
  test('renders contact form', () => {
    const { getByText } = render(<Contact />);
    const formTitle = getByText(/Send me a message/i);
    expect(formTitle).toBeInTheDocument();
  });
});