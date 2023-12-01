import client from '../utils/client';
// API CALLS FOR BOOKS

const endpoint = client.databaseURL; // URL to hit our Firebase API.

// GET BOOKS
const getBooks = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    // Will wait, then do this thing, then do this other thing. W/O .then, the code will
    // run without getting the data. This tells it to wait.
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data))) // Taking the data from the obj, resolve() turns/packages data
    // into an array of things.
    .catch(reject);
});

// TODO: DELETE BOOK
const deleteBook = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books/${firebaseKey}.json`, { // firebase key indicates what we want
    // to del. W/o it, your entire db will be deleted.
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: GET SINGLE BOOK
const getSingleBook = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    // Will wait, then do this thing, then do this other thing. W/O .then, the code will
    // run without getting the data. This tells it to wait.
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data))) // Taking the data from the obj, resolve() turns/packages data
    // into an array of things.
    .catch(reject);
});

// TODO: CREATE BOOK
const createBook = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: UPDATE BOOK
const updateBook = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books/${payload.firebaseKey}.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// FILTER BOOKS ON SALE
const booksOnSale = () => new Promise((resolve, reject) => {
  // Filter by sales property on obj and equal it to true
  fetch(`${endpoint}/books.json?orderBy="sale"&equalTo=true`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// TODO: STRETCH...SEARCH BOOKS

export {
  getBooks,
  createBook,
  booksOnSale,
  deleteBook,
  getSingleBook,
  updateBook
};
