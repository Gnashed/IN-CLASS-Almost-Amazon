import { getSingleBook } from './bookData';
import { getAuthorBooks, getSingleAuthor } from './authorData';

// Get data for viewBook
const getBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
  // GET SINGLE BOOK
  getSingleBook(firebaseKey).then((bookObject) => { // return single book object, make an API call using this object.
    getSingleAuthor(bookObject.author_id) // we nest this promise so that we can use the book object from above.
      .then((authorObject) => resolve({ ...bookObject, authorObject }));
  }).catch(reject);
  // GET AUTHOR
  // Create an object that has book data and an object named authorObject
});

const getAuthorDetails = (firebaseKey) => new Promise((resolve, reject) => {
  // GET SINGLE AUTHOR
  getSingleAuthor(firebaseKey).then((authorObject) => { // return single author object, make an API call using this object.
    getAuthorBooks(authorObject.firebaseKey) // we nest this promise so that we can use the author object from above.
      .then((bookObject) => {
        const test = { ...authorObject, bookObject };
        console.warn(test);
        resolve(test);
      });
  }).catch(reject);
});

export { getBookDetails, getAuthorDetails };
