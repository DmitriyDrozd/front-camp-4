import 'element-remove';
import 'whatwg-fetch';

import jsonData from 'assets/lesson-3-data.json';
import 'styles/main.scss';

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

(function () {
    console.log('Lesson 3 processed JSON:', jsonData);

    const showNewsButtonElement = document.getElementById('showNewsButton');
    showNewsButtonElement.addEventListener('click', initApplication);

    async function initApplication () {
        showNewsButtonElement.removeEventListener('click', initApplication);
        showNewsButtonElement.remove();

        const { default: App } = await import(/* webpackChunkName: "App" */ 'views/App');
        import(/* webpackChunkName: "NewsList" */ 'styles/_newsList.scss');

        const app = new App();
        app.init();
    }
})();
