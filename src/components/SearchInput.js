import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ handleSearch }) => {
  const handleChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by region..."
        onChange={handleChange}
      />
    </div>
  );
};

SearchInput.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchInput;
