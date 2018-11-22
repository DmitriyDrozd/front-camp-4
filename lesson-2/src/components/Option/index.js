const getOptionElement = ({ text, value }) => {
    const el = document.createElement('option');
    el.value = value;
    el.text = text;
    return el;
};

export default getOptionElement;