import React from 'react';
import PropTypes from 'prop-types';
import './BookListTitle.css';

const BookListTitle = (props) => {
  return (
    <div className="list-books-title">
      <h1>{props.title}</h1>
    </div>
  );
};

BookListTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BookListTitle;
