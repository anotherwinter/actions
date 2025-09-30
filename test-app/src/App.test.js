import { render, screen } from '@testing-library/react';
import App from './App';

test('renders This was built text', () => {
  render(<App />);
  const textElement = screen.getByText(/This was built/i);
  expect(textElement).toBeInTheDocument();
});
