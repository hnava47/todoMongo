const { Schema, model } = require('mongoose');

const blogSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        index: true
    },
    description: {
        type: String,
        required: true
    }
});

const Blog = model('Blog', blogSchema);

module.exports = Blog;
