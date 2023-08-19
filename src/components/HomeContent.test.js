import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import HomeContents from './HomeContents'; // Import your HomeContents component

describe('HomeContents Component', () => {
  it('renders content correctly', () => {
    const mockItem = {
      region: 'Test Region',
      cases: {
        '2020-08-08': { total: 10 },
      },
    };

    render(
      <MemoryRouter>
        <HomeContents item={mockItem} />
      </MemoryRouter>,
    );

    // Assert that the rendered content is correct
    expect(screen.getByText('Test Region')).toBeInTheDocument();
    expect(screen.getByText('Total cases:')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
  });
});
