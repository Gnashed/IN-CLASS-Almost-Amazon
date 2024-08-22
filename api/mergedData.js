import { getSingleBook } from './bookData';
import { getSingleAuthor } from './authorData';

// Get data for viewBook
const getBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
  // GET SINGLE BOOK
  getSingleBook(firebaseKey).then((bookObject) => { // return single book object, make an API call to get the author information based on the returned book object from above.
    getSingleAuthor(bookObject.author_id) // we nest this promise so that we can use the book object
      .then((authorObject) => resolve({ ...bookObject, authorObject }));
  }).catch(reject);
  // GET AUTHOR
  // Create an object that has book data and an object named authorObject
});

export default getBookDetails;
