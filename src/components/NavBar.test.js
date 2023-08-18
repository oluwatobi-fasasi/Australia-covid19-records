import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';

test('renders navbar with correct text and icons', () => {
  const { getByText } = render(
    <Router>
      <NavBar />
    </Router>,
  );

  // Check if the component renders the correct text
  const titleElement = getByText(/Australia Covid19 Report/i);
  expect(titleElement).toBeInTheDocument();
});
