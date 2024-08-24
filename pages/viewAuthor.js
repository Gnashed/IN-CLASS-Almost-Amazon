import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

// TODO: Add an interactive favorite button.
const viewAuthor = (obj) => {
  clearDom();

  const domString = `
    <div class="view-author-info">
      <section class="author-info" style="color: wheat;">
        <h5>
          ${obj.first_name} ${obj.last_name}
          ${obj.favorite ? '<img width="50" height="50" src="https://img.icons8.com/ios/50/like--v1.png" alt="like--v1" style="background-color: red;" />' : ''}
        </h5>
        <p>${obj.email}</p>
        <div class="mt-5">
          <i id="edit-author-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info">Edit</i>
          <i id="delete-author--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt">Delete</i>
          <hr style="color: white;">
        </div>
      </section>
      <section class="books-from-author">
        <h4 style="color: wheat;">Books</h4>
      </section>
    </div>
  `;

  renderToDOM('#view', domString);

  // Render Author's books
  let bookDomString = '';

  const books = obj.bookObject;

  books.forEach((book) => {
    bookDomString += `
      <div class="card">
        <img class="card-img-top" src=${book.image} alt=${book.title} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${book.title}</h5>
            <p class="card-text bold">
              ${book.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${book.price}` : `$${book.price}`}
            </p>
            <hr>
            <i class="btn btn-success fas fa-eye" id="view-book-btn--${book.firebaseKey}">View</i>
            <i id="edit-book-btn--${book.firebaseKey}" class="fas fa-edit btn btn-info">Edit</i>
            <i id="delete-book-btn--${book.firebaseKey}" class="btn btn-danger fas fa-trash-alt">Delete</i>
        </div>
      </div>
    `;

    renderToDOM('.books-from-author', bookDomString);
  });
};

export default viewAuthor;
