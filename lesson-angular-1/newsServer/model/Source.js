const mongoose = require('mongoose');

const sourceSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    url: { type: String, default: '' },
});

const Source = mongoose.model('Source', sourceSchema);

module.exports = Source;
