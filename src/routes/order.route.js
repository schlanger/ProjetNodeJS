const router = require('express').Router();

const {
    getAllOrders,
    getOrderById

} = require('../controller/order.controller')

router.get('/',getAllOrders);

router.get('/:id',getOrderById);

/*
router.post('/create',createUser);

router.patch('/update/:id',updateUserById);

router.delete('/delete/:id',deleteUserById)*/

module.exports = router;
