const DOTS_COUNT = 8;
const HIDE_CLASS = 'hidden';
const SPINNER_CLASS = 'lds-roller';

export default class Spinner {
    constructor (id) {
        this._id = id;

        this.spinner = document.createElement('div');
        this.spinner.className = SPINNER_CLASS;
        this.spinner.id = id;

        const dots = Array(DOTS_COUNT).fill(0).map(() => document.createElement('div'));
        dots.forEach(dot => {
            this.spinner.appendChild(dot);
        });
    }

    start () {
        const element = document.getElementById(this._id);

        element.childNodes.forEach(child => { child.classList && child.classList.add(HIDE_CLASS); });
        element.appendChild(this.spinner);
    }

    stop () {
        const element = document.getElementById(this._id);

        this.spinner.remove();
        element.childNodes.forEach(child => { child.classList && child.classList.remove(HIDE_CLASS); });
    }
}
