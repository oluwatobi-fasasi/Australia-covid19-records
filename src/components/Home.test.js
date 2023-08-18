import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './Home';
import store from '../redux/store';


test('renders list of cases with links', () => {
  const { getByText } = render(
    <Router>
      <Provider store={store}>
        <Home />
      </Provider>
    </Router>
  );

  const caseRegion = getByText(/Database/i);
  expect(caseRegion).toBeInTheDocument();
});
