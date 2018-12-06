import Component from 'entities/Component.class';

export default class SelectComponent extends Component {
    constructor (options) {
        const { events, data } = options;

        super('#categorySelect', events);

        this.options = data;
    }

    static createOption (text, value) {
        const el = document.createElement('option');

        el.value = value;
        el.text = text;

        return el;
    }

    set options (data) {
        if (data.length) {
            this.children = data.map(item => SelectComponent.createOption(item.name, item.id));
        } else {
            this.children = [];
        }

        this.render();
    }

    get options () {
        return this.children;
    }
}
