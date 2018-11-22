import { API_KEY } from 'config/Endpoint';
import App from 'components/App';
import 'whatwg-fetch';
import 'element-remove';

import 'styles/main.scss';

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

const onLoad = () => {
    const app = new App(API_KEY);
    app.init();
};

document.addEventListener('DOMContentLoaded', onLoad);
