import Component from 'entities/Component.class';

const POPUP_ID = 'errorHandlerPopup';

class ErrorHandlerPopup extends Component {
    constructor () {
        ErrorHandlerPopup.createContainerElement();
        super(`#${POPUP_ID}`);
    }

    openPopup () {
        this.element.classList.remove('hidden');
    }

    closePopup () {
        this.element.classList.add('hidden');
    }

    static createContainerElement () {
        const background = document.createElement('div');
        background.classList.add('popup');
        background.classList.add('hidden');
        background.id = POPUP_ID;
        const [body] = document.getElementsByTagName('body');
        body.appendChild(background);
    }

    static createPopup (title, message) {
        const popup = document.createElement('div');
        popup.innerHTML = `
            <div class="popup-container">
                <div class="popup-title">${title}</div>
                <div class="popup-content">${message}
                <button class="btn primary" id="closePopupButton">Close</button>
                </div>
            </div>
        `;

        return [popup];
    }

    set error (data) {
        if (data) {
            const { code, message } = data;
            this.children = ErrorHandlerPopup.createPopup(code, message);
            this.openPopup();
        } else {
            this.closePopup();
        }

        this.render();

        const closeButton = document.getElementById('closePopupButton');

        if (closeButton) {
            closeButton.addEventListener('click', () => { this.closePopup(); });
        }
    }
}

const errorHandlerPopup = new ErrorHandlerPopup();
export default errorHandlerPopup;
