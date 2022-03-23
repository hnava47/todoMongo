const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
    text: {
        type: String,
        require: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const Todo = model('Todo', todoSchema);

module.exports = Todo;
