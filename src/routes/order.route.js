const router = require('express').Router();

const {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrderById,
    deleteOrderById

} = require('../controller/order.controller')

router.get('/',getAllOrders);

router.get('/:id',getOrderById);

router.post('/create',createOrder);

router.patch('/update/:id',updateOrderById);

router.delete('/delete/:id',deleteOrderById)

module.exports = router;
