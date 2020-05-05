import React from 'react';
import './BookshelfChanger.css';
import PropTypes from 'prop-types';

const BookshelfChanger = (props) => {
  return (
    <div className="book-shelf-changer">
      <select
        onChange={(event) =>
          props.updateShelfHandler(props.book, event.target.value)
        }
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="none">None</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
      </select>
    </div>
  );
};

BookshelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  updateShelfHandler: PropTypes.func.isRequired,
};

export default BookshelfChanger;
