import { render, screen } from '@testing-library/react';
import Home from '@sln/pages/Home';

test('Renders App without error.', () => {
  render(<Home />);
  
  const title = screen.getByText(/Space Launch Now/);
  expect(title).not.toBeNull();

  const subtitle = screen.getByText(/Spaceflight News and Events/);
  expect(subtitle).not.toBeNull();
});
