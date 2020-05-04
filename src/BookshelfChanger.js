import React from 'react';
import './BookshelfChanger.css';
import PropTypes from 'prop-types';

const BookshelfChanger = (props) => {
  return (
    <div className="book-shelf-changer">
      <select>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

BookshelfChanger.propTypes = {
  shelfList: PropTypes.array,
};

export default BookshelfChanger;
