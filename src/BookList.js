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
        {props.bookLists ? (
          props.bookLists.map((list) => (
            <Bookshelf title={list.title} books={list.books} />
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
  bookLists: PropTypes.array.isRequired,
};

export default BookList;
