const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    //updateUserById,
    //deleteUserById
} = require('../controller/User.controller')

router.get('/',getAllUsers);

router.get('/:id',getUserById);

router.post('/',createUser);

//router.patch('/:id',updateUserById);

//router.delete('/:id',deleteUserById)

module.exports = router;
