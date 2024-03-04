const router = require('express').Router();

const {
    getAllOrders,
    getOrderById,
    createOrder

} = require('../controller/order.controller')

router.get('/',getAllOrders);

router.get('/:id',getOrderById);

router.post('/create',createOrder);

/*

router.patch('/update/:id',updateUserById);

router.delete('/delete/:id',deleteUserById)*/

module.exports = router;
