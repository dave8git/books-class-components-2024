import BooksForm from "./components/BooksForm/BooksForm";
import BooksList from "./components/BooksList/BooksList";
import { fetchBooks } from "./redux/booksRedux";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from 'react';
import shortid from "shortid";

class App extends React.Componnet {
  state = {
    books: [
      {
        "id": 1,
        "title": "of Mice and Men",
        "author": "John Steinbeck"
      },
      {
        "id": 2,
        "title": "the Witcher",
        "author": "Andrzej Sapkowski"
      },
      {
        "title": "fsad",
        "author": "fasd",
        "id": 3
      },
      {
        "title": "fd",
        "author": "fd",
        "id": 4
      }
    ]
  }

  removeBook = bookId => {
    this.setState({ books: this.state.books.filter(book => book.id !== bookId)})
  };

  addBook = newBook => {
    this.setState({books: [...this.state.books, {id: shortid(), title: newBook.title, author: newBook.author }]}); 
  };

  render() {
    const { books } = this.state;
    const { addBook, removeBook } = this;
    return (
      <>
        <h1>Hello to books app!</h1>
        <BooksList books={this.state.books} removeBook={this.removeBooks} />
        <BooksForm addBook={this.addBook} />
      </>
    );
  }
 
}

export default App;
