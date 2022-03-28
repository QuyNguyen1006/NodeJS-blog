const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
const Course = new Schema(
    {
        name: { type: String, maxLength: 255 },
        description: { type: String, maxLength: 600 },
        img: { type: String, maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true },
    },
    { timestamps: true },
);

module.exports = mongoose.model('Course', Course);
