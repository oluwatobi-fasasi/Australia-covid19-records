import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by region..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

SearchInput.propTypes = {
  handleSearch: PropTypes.func.isRequired, // Validate handleSearch prop
};

export default SearchInput;
