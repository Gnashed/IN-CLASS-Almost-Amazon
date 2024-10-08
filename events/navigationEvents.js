import { favoriteAuthors, getAuthors } from '../api/authorData';
import { booksOnSale, getBooks, searchBooks } from '../api/bookData';
import { showAuthors } from '../pages/authors';
import { showBooks } from '../pages/books';
import { signOut } from '../utils/auth';

// navigation events
const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#sale-books').addEventListener('click', () => {
    booksOnSale().then((books) => showBooks(books));
  });

  document.querySelector('#all-books').addEventListener('click', () => {
    getBooks(user.uid).then((books) => showBooks(books));
  });

  document.querySelector('.navbar-brand').addEventListener('click', () => {
    getBooks(user.uid).then((books) => showBooks(books));
  });

  // 1. When a user clicks the authors link, make a call to firebase to get all authors
  // 2. Convert the response to an array because that is what the makeAuthors function is expecting
  // 3. If the array is empty because there are no authors, make sure to use the emptyAuthor function
  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors(user.uid).then(showAuthors);
  });
  document.querySelector('#favorite-authors').addEventListener('click', () => {
    favoriteAuthors(user.uid).then(showAuthors);
  });

  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
      searchBooks().then((arrayOfBooks) => {
        const searchResults = arrayOfBooks.filter((book) => book.title.toLowerCase().includes(searchValue));
        showBooks(searchResults);
        // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
        // OTHERWISE SHOW THE STORE
        if (!arrayOfBooks) {
          showBooks(arrayOfBooks);
        }
      });
      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
