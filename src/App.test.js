import { render, screen } from '@testing-library/react';
import App from './App';

test('that sections are rendered', () => {
  render(<App />);
  // header
  const headerElement = screen.getByText(/feedback ui/i);
  expect(headerElement).toBeInTheDocument();
  // rating form
  const ratingFromElement = screen.getByPlaceholderText(/write a review/i);
  expect(ratingFromElement).toBeInTheDocument();
  // feedback list
  const feedbackList = screen.getAllByRole('button', {name:/delete feedback/i});
  expect(feedbackList).toHaveLength(3);
});
