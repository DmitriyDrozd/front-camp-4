export default class Component {
    /**
     * @param {string} selector
     * @param {object} events
     */
    constructor (selector, events = null) {
        if (!selector) {
            throw Error('No selector provided for View constructor!');
        }

        this.selector = selector;
        this.element = document.querySelector(selector);
        this.children = [];

        if (!this.element) {
            throw Error('No element found according to selector!');
        }

        if (events && Object.getOwnPropertyNames(events).length !== 0) {
            for (const event in events) {
                this.subscribe(event, events[event]);
            }
        }
    }

    /**
     * Subscribe element to handle an event
     * @param event
     * @param handler
     */
    subscribe (event, handler) {
        this.element.addEventListener(event, handler);
    }

    /**
     * Removes old child elements from DOM and appends new child elements with up-to-date data
     */
    render () {
        this.removeChildrenFromDOM();
        this.children.forEach(child => { this.element.appendChild(child); });
    }

    /**
     * Removes all children of element from DOM and memory.
     */
    removeChildrenFromDOM () {
        while (this.element.firstChild) {
            this.element.firstChild.remove();
        }
    }
}
