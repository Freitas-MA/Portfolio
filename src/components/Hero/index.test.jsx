import React from 'react';
import { render } from '@testing-library/react';
import Home from './Hero';

describe('Home component', () => {
  it('renders the header text', () => {
    const { getByText } = render(<Home />);
    const headerText = getByText(/Hi I'm Marcos Freitas/i);
    expect(headerText).toBeInTheDocument();
  });

  it('renders the "Connect With Me" button', () => {
    const { getByText } = render(<Home />);
    const connectButton = getByText(/Connect With Me/i);
    expect(connectButton).toBeInTheDocument();
  });

  it('renders the tech icons', () => {
    const { getAllByTestId } = render(<Home />);
    const techIcons = getAllByTestId('tech-icon');
    expect(techIcons).toHaveLength(6);
  });
});