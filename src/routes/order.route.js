const router = require('express').Router();

const {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrderById

} = require('../controller/order.controller')

router.get('/',getAllOrders);

router.get('/:id',getOrderById);

router.post('/create',createOrder);

router.patch('/update/:id',updateOrderById);
/*
router.delete('/delete/:id',deleteUserById)*/

module.exports = router;
