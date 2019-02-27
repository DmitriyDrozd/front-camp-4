const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    author: { type: String, default: 'Guest' },
    created: { type: Date, default: Date.now },
    title: { type: String },
    description: { type: String, default: '' },
    content: { type: String, default: '' },
    image: { type: String },
    url: { type: String, required: true },
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
