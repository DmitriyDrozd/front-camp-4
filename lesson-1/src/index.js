import { API_KEY } from 'config/Endpoint';
import App from 'components/App';

import 'styles/main.scss';

window.onload = () => {
    const app = new App(API_KEY);
    app.init();
};
