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
            width: props.book.width ? props.book.width : 128, // 128,
            height: props.book.height ? props.book.height : 193, // 193,
            backgroundImage: props.book.imageLinks.thumbnail
              ? `url("${props.book.imageLinks.smallThumbnail}")`
              : '',
          }}
        ></div>
        <BookshelfChanger />
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.authors.join(', ')}</div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
