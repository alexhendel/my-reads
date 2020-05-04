import React from 'react';
import PropTypes from 'prop-types';
import BookListTitle from './BookListTitle';
import Bookshelf from './Bookshelf';
import SearchButton from './SearchButton';

const BookList = (props) => {
  return (
    <div className="list-books">
      <BookListTitle title="MyReads" />
      <div className="list-books-content">
        {props.shelfs ? (
          props.shelfs.map((list) => (
            <Bookshelf
              key={list.id}
              title={list.title}
              books={props.books.filter((book) => book.shelf === list.id)}
            />
          ))
        ) : (
          <p>Sorry, you have no book lists.</p>
        )}
        <SearchButton />
      </div>
    </div>
  );
};

BookList.proptypes = {
  books: PropTypes.array.isRequired,
  shelfs: PropTypes.array.isRequired,
};

export default BookList;
