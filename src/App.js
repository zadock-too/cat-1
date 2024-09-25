// src/App.js

import React from 'react';
import './App.css';

// Book component to display individual book information
const Book = ({ title, author, description }) => {
  return (
    <div className="book">
      <h2>{title}</h2>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Description:</strong> {description}</p>
    </div>
  );
};

function App() {
  // List of books
  const books = [
    {
      title: 'To Kill Lion ',
      author: 'Zadock  Too',
      description: 'A novel about racial injustice in the Deep South.'
    },
    {
      title: '1984',
      author: 'George Orwell',
      description: 'A dystopian novel set in a totalitarian society ruled by Big Brother.'
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      description: 'A romantic novel that explores the issues of marriage, class, and social standing.'
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'A story about the mysterious millionaire Jay Gatsby and his obsession with Daisy Buchanan.'
    },
  {

  }
  ];

  return (
    <div className="App">
      <h1>Book List</h1>
      <div className="book-list">
        {books.map((book, index) => (
          <Book 
            key={index}
            title={book.title}
            author={book.author}
            description={book.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
