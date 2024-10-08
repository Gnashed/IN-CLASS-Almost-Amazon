import { getAuthors, getSingleAuthor } from '../api/authorData';
import { deleteBook, getBooks, getSingleBook } from '../api/bookData';
import { getBookDetails, getAuthorDetails, deleteAuthorBooksRelationship } from '../api/mergedData';
import addAuthorForm from '../components/forms/addAuthorForm';
import addBookForm from '../components/forms/addBookForm';
import { showAuthors } from '../pages/authors';
import { showBooks } from '../pages/books';
import viewAuthor from '../pages/viewAuthor';
import viewBook from '../pages/viewBook';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // ============================ BOOKS ============================
    if (e.target.id.includes('delete-book-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        // console.warn('CLICKED DELETE BOOK', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');
        deleteBook(firebaseKey).then(getBooks(user.uid).then(showBooks));
      }
    }

    // TODO: Start debugging this
    if (e.target.id.includes('add-book-btn')) {
      // console.warn('ADD BOOK');
      // eslint-disable-next-line comma-dangle
      addBookForm(user,);
    }

    if (e.target.id.includes('edit-book-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      // Grab current object from Firebase to prepop the form with those values.
      getSingleBook(firebaseKey).then((singleBook) => addBookForm(user, singleBook));
    }

    if (e.target.id.includes('view-book-btn')) {
      // console.warn('VIEW BOOK', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      getBookDetails(firebaseKey).then(viewBook);
    }

    // ============================ AUTHORS ============================
    if (e.target.id.includes('add-author-btn')) {
      // console.warn('ADD AUTHOR');
      addAuthorForm();
    }

    if (e.target.id.includes('view-author-btn')) {
      // console.warn('ADD AUTHOR');
      const [, firebaseKey] = e.target.id.split('--');
      getAuthorDetails(firebaseKey).then(viewAuthor);
    }

    if (e.target.id.includes('update-author')) {
      const [, firebaseKey] = e.target.id.split('--');
      // Grab current object from Firebase to prepop the form with those values.
      getSingleAuthor(firebaseKey).then((singleAuthorObj) => addAuthorForm(singleAuthorObj));
    }

    if (e.target.id.includes('delete-author')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        // console.warn('DELETE AUTHOR', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');
        // deleteSingleAuthor(firebaseKey).then(getAuthors().then(showAuthors));
        deleteAuthorBooksRelationship(firebaseKey).then(() => {
          getAuthors(user.uid).then(showAuthors);
        });
      }
    }
  });
};

export default domEvents;
