import { getAuthors } from '../../api/authorData';
import renderToDOM from '../../utils/renderToDom';

const selectAuthor = (authorId, userId) => {
  // First, save the auth'd user's uid.

  let domString = `<label for="author">Select an Author</label>
    <select class="form-control" id="author_id" required>
    <option value="">Select an Author</option>`;

  getAuthors(userId.uid).then((authorsArray) => {
    authorsArray.forEach((authorObject) => {
      domString += `
          <option 
            value="${authorObject.firebaseKey}" 
            ${authorId === authorObject.firebaseKey ? 'selected' : ''}>
              ${authorObject.first_name} ${authorObject.last_name}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-author', domString);
  });
};

export default selectAuthor;
