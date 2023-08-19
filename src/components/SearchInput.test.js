import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchInput from './SearchInput';

describe('SearchInput Component', () => {
  it('calls handleSearch with correct value on input change', () => {
    // Create a mock function for handleSearch
    const mockHandleSearch = jest.fn();

    // Render the SearchInput component and pass the mock function
    const { getByPlaceholderText } = render(
      <SearchInput handleSearch={mockHandleSearch} />,
    );

    const inputElement = getByPlaceholderText('Search by region...');

    fireEvent.change(inputElement, { target: { value: 'TestRegion' } });

    expect(mockHandleSearch).toHaveBeenCalledWith('TestRegion');
  });
});
