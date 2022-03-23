const router = require('express').Router();
const {
    createTodo,
    getAllTodos,
    getTodoById,
    updateTodoById,
    deleteTodoById
} = require('../../../controllers/todoController');

router.route('/')
    .get(getAllTodos)
    .post(createTodo);

router.route('/:todoId')
    .get(getTodoById)
    .put(updateTodoById)
    .delete(deleteTodoById);

module.exports = router;
