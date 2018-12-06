module.exports = function (source) {
    const data = JSON.parse(source);
    const result = {};

    for (const param in data) {
        if (data.hasOwnProperty(param) && !Number.isInteger(+param)) {
            result[param] = data[param];
        }
    }

    return JSON.stringify(result);
};
