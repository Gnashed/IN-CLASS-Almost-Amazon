import client from '../utils/client';

const endpoint = client.databaseURL;

// FIXME:  GET ALL AUTHORS
const getAuthors = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/authors.json`, {
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

// FIXME: CREATE AUTHOR
const createAuthor = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/authors.json`, {
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

// FIXME: GET SINGLE AUTHOR
const getSingleAuthor = () => {};

// FIXME: DELETE AUTHOR
const deleteSingleAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/authors/${firebaseKey}.json`, { // firebase key indicates what we want
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

// FIXME: UPDATE AUTHOR
const updateAuthor = () => {};

// Filter Authors
const favoriteAuthors = () => new Promise((resolve, reject) => {
  // Filter by author, set it to true.
  fetch(`${endpoint}/authors.json?orderBy="author"&equalTo=true`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// TODO: GET A SINGLE AUTHOR'S BOOKS
const getAuthorBooks = () => {};

export {
  getAuthors,
  createAuthor,
  getSingleAuthor,
  deleteSingleAuthor,
  updateAuthor,
  favoriteAuthors,
  getAuthorBooks,
};
