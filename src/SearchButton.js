import React from 'react';
import './SearchButton.css';
import { Link } from 'react-router-dom';

const SearchButton = () => {
  return (
    <Link to="/search">
      <div className="open-search">
        <button>Add a book</button>
      </div>
    </Link>
  );
};

export default SearchButton;
