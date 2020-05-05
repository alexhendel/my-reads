import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';
import Bookshelf from './Bookshelf';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    results: [],
  };

  updateSearch = async (event) => {
    console.log(event.target.value);

    const searchString = event.target.value;
    if (searchString && searchString.length > 0) {
      const results = await BooksAPI.search(event.target.value);
      if (results && !results.error) {
        this.setState({ results });
      } else {
        this.setState({ results: [] });
      }
    } else {
      this.setState({ results: [] });
    }
  };

  render() {
    return (
      <>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/">
              <button className="close-search">Close</button>
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={this.updateSearch}
              />
            </div>
          </div>
          <div className="search-books-results">
            <Bookshelf
              title="Search Results"
              books={this.state.results}
              updateShelfHandler={this.props.updateShelfHandler}
            />
          </div>
        </div>
      </>
    );
  }
}

Bookshelf.propTypes = {
  updateShelfHandler: PropTypes.func.isRequired,
};

export default Search;
