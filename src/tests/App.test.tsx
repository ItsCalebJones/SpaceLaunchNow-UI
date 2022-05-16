import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';

test('Renders App without error.', () => {
  <BrowserRouter>
    render(<App />);
  </BrowserRouter>
});
