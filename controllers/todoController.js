const { Todo } = require('../model');

module.exports = {
    createTodo: async (req, res) => {
        const { text, userId } = req.body;

        if (!text) {
            return res.status(401).json({ error: 'Must included text' });
        }

        try {
            const newTodo = await Todo.create({
                text,
                userId
            });

            res.json(newTodo);
        } catch (error) {
            res.json(error);
        }
    },
    getAllTodos: async (req, res) => {
        try {
            const todos = await Todo.find().populate({
                path: 'userId',
                select: '-role -powerLevel -email -hobbies'
            });

            res.json(todos);
        } catch (error) {
            res.json(error);
        }
    },
    getTodoById: async (req, res) => {
        const { todoId } = req.params;

        try {
            const todo = await Todo.findById(todoId);

            res.json(todo);
        } catch (error) {
            res.json(error);
        }
    },
    updateTodoById: async (req, res) => {
        const { todoId } = req.params;

        try {
            const updatedTodo = await Todo.findByIdAndUpdate(
                todoId,
                {...req.body},
                {
                    new: true,
                    runValidators: true
                }
            );

            res.json(updatedTodo);
        } catch (error) {
            res.json(error);
        }
    },
    deleteTodoById: async (req, res) => {
        const { todoId } = req.params;

        try {
            const deletedTodo = await Todo.findByIdAndDelete(todoId);

            res.json(deletedTodo);
        } catch (error) {
            res.json(error);
        }
    }
};
