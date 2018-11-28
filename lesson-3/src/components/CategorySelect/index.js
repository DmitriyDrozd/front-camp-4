import getOptionElement from '../Option';

const fillSelectElement = (selectEl, options) => {
    options.forEach(option => {
        const optionEl = getOptionElement({ text: option.name, value: option.id });
        selectEl.appendChild(optionEl);
    });
};

export default fillSelectElement;