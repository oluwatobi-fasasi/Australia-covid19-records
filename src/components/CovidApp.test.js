import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CovidApp from './CovidApp';

describe('CovidApp Component', () => {
  it('renders home page correctly', () => {
    render(
      <Provider store={store}>
        <CovidApp />
      </Provider>,
    );

    expect(screen.getByText(/Database/i)).toBeInTheDocument();
  });
});
