import React from 'react';
import PropTypes from 'prop-types';
import './Bookshelf.css';
import Book from './Book';

const Bookshelf = (props) => {
  return (
    <>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books"></div>
        {props.books ? (
          <ol className="books-grid">
            {props.books.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  updateShelfHandler={props.updateShelfHandler}
                />
              </li>
            ))}
          </ol>
        ) : (
          <p>Nothing here yet.</p>
        )}
      </div>
    </>
  );
};

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array,
  updateShelfHandler: PropTypes.func.isRequired,
};

export default Bookshelf;
