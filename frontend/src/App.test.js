import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome to react', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to React/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders Welcome to react again', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to React/i);
  expect(linkElement).toBeInTheDocument();
});