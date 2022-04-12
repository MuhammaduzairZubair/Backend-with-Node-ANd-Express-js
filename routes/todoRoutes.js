const express = require('express')
const router = express.Router()

const {createNewTodo, 
    getAllTodos, 
    getTodoById, 
    updateTodo, 
    deleteTodo
} = require('../controllers/todoControllers');

// router.get('/todos', getAllTodos)

router.route('/todos').get(getAllTodos)
router.route('/todo/:id').get(getTodoById)
router.route('/todo/update/:id').put(updateTodo)   //api/v1/todo/update/12
//router.route('/todo/delete/:id').delete(deleteTodo)   //api/v1/todo/delete/12
router.route('/todo/new').post(createNewTodo)

module.exports = router