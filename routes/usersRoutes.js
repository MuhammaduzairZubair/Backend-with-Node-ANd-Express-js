const express = require('express')
const router = express.Router()

const {createNewUser, 
    getAllUsers, 
    getUserById, 
    updateUser, 
    deleteUser
} = require('../controllers/usersControllers');

// router.get('/todos', getAllTodos)

router.route('/users').get(getAllUsers)
router.route('/user/:id').get(getUserById)
router.route('/user/update/:id').put(updateUser)   //api/v1/user/update/12
//router.route('/user/delete/:id').delete(deleteUser)   //api/v1/user/delete/12
router.route('/user/new').post(createNewUser)

module.exports = router