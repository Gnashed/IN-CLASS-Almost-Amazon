import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (obj) => {
  clearDom();

  const domString = `
    <div class="view-author-info">
      <section>
        <h5>${obj.first_name} ${obj.last_name}</h5>
        <p>${obj.email}</p>
        <div class="mt-5">
          <i id="edit-author-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info">Edit</i>
          <i id="delete-author--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt">Delete</i>
        </div>
      </section>
      <section>
        <hr>
      </section>
    </div>
   `;

  renderToDOM('#view', domString);
};

export default viewAuthor;
