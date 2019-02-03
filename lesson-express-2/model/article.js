const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    author: { type: String, default: 'Guest' },
    created: { type: Date, default: Date.now },
    title: { type: String },
    description: { type: String, default: '' },
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
