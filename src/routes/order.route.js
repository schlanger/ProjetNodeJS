const router = require('express').Router();

const {
    getAllOrders,

} = require('../controller/order.controller')

router.get('/',getAllOrders);

/*router.get('/:id',getUserById);

router.post('/create',createUser);

router.patch('/update/:id',updateUserById);

router.delete('/delete/:id',deleteUserById)*/

module.exports = router;
