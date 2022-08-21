import {render, screen, within} from '@testing-library/react';
import FeedbackForm from "./FeedbackForm";

test("default rating is 10", () => {
  render(<FeedbackForm/>);

  const ratingGroup = screen.getByRole('group', {name: /How would you rate your service with us/i});

  const rating10 = within(ratingGroup).getByDisplayValue('10');

  expect(rating10).toBeChecked();
});
