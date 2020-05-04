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

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = async () => {
    const books = await BooksAPI.getAll();
    console.log(books);
    this.setState({ books });
  };

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <BookList books={this.state.books} shelfs={this.state.shelfs} />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default BooksApp;
