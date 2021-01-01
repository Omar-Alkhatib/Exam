const mongoose = require('mongoose');

const books = new mongoose.Schema({
	name: String,
	title: String,
	author: String,
	pages: Number,
	publisher: String,
	published_at: String,
});

module.exports = books;
