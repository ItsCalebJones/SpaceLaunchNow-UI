import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Space Launch Now text', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Space Launch Now/);
  expect(linkElement).not.toBeNull();
});
