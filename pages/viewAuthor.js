import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (obj) => {
  clearDom();

  // TODO: Add an interactive favorite button.

  // TODO: Render the author's books here. obj.bookObject.firebaseKey
  const domString = `
    <div class="view-author-info">
      <section class="author-info" style="color: wheat;">
        <h5>${obj.first_name} ${obj.last_name}</h5>
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
};

export default viewAuthor;
