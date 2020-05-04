import React from 'react';
// import * as BooksAPI from './BooksAPI'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BookList from './BookList';
import Search from './Search';
import './App.css';

class BooksApp extends React.Component {
  state = {
    bookLists: [
      {
        title: 'Currently Reading',
        books: [
          {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            coverImageUrl:
              'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
          },
        ],
      },
      { title: 'Want to Read' },
      { title: 'Read' },
    ],
  };

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <BookList bookLists={this.state.bookLists} />
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
