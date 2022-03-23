const router = require('express').Router();
const {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
} = require('../../../controllers/userController');

router.route('/')
    .get(getAllUsers)
    .post(createUser);

router.route('/:userId')
    .get(getUserById)
    .put(updateUserById);

module.exports = router;
