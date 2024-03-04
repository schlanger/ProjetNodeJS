const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
} = require('../controller/user.controller')

router.get('/',getAllUsers);

router.get('/:id',getUserById);

router.post('/create',createUser);

router.patch('/update/:id',updateUserById);

router.delete('/delete/:id',deleteUserById)

module.exports = router;
