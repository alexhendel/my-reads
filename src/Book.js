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
            width: props.book.width ? props.book.width : 128, // 128 = default,
            height: props.book.height ? props.book.height : 193, // 193 = default,
            backgroundImage: props.book.imageLinks
              ? `url("${props.book.imageLinks.smallThumbnail}")`
              : '',
          }}
        ></div>
        <BookshelfChanger
          book={props.book}
          updateShelfHandler={props.updateShelfHandler}
        />
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">
        {props.book.authors ? props.book.authors.join(', ') : ''}
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateShelfHandler: PropTypes.func.isRequired,
};

export default Book;
