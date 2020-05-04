import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import BookshelfChanger from './BookshelfChanger';

const Book = (props) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: props.data.width ? props.data.width : 128, // 128,
            height: props.data.height ? props.data.height : 193, // 193,
            backgroundImage: props.data.imageLinks.thumbnail
              ? `url("${props.data.imageLinks.thumbnail}")`
              : '',
          }}
        ></div>
        <BookshelfChanger />
      </div>
      <div className="book-title">{props.data.title}</div>
      <div className="book-authors">{props.data.author}</div>
    </div>
  );
};

Book.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Book;
