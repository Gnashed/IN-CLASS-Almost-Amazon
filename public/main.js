import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';

import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  // When app loads, this function check if the user is log in or not.
  ViewDirectorBasedOnUserAuthStatus();
};

init();
