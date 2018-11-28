import 'element-remove';
import 'whatwg-fetch';

import { API_KEY } from 'config/Endpoint';
import App from 'components/App';

import jsonData from './assets/lesson-3-data.json';
import 'styles/main.scss';

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

const onLoad = () => {
    const app = new App(API_KEY);
    app.init();
};

console.log('Lesson 3 processed JSON:', jsonData);

document.addEventListener('DOMContentLoaded', onLoad);
