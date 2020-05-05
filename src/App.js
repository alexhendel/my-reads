import React from 'react';
import * as BooksAPI from './BooksAPI';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BookList from './BookList';
import Search from './Search';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: [],
    shelfs: [
      { id: 'currentlyReading', title: 'Currently Reading' },
      { id: 'wantToRead', title: 'Want to Read' },
      { id: 'read', title: 'Read' },
    ],
  };

  constructor(props) {
    super(props);
    this.updateShelfHandler = this.updateShelfHandler.bind(this);
  }

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = async (prevState) => {
    const books = await BooksAPI.getAll();
    this.setState((prevState) => ({
      books,
      shelfs: prevState.shelfs,
    }));
  };

  updateShelfHandler = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    this.getAllBooks();
  };

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <BookList
                books={this.state.books}
                shelfs={this.state.shelfs}
                updateShelfHandler={this.updateShelfHandler}
              />
            </Route>
            <Route exact path="/search">
              <Search
                myBooks={this.state.books}
                updateShelfHandler={this.updateShelfHandler}
              />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default BooksApp;
