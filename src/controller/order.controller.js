const orderModel = require('../models/order.model');


// Récupérer l'ensemble des orders

getAllOrders = (request,response) => {
    orderModel.getAllOrders((error, data) => {   
        if (error)
            response.status(500).send({
                message: error.message || "Some error occurred while retrieving orders."
            });
        else 
            response.send(data);
    });
};

// Récupérer un order par son id

getOrderById = (request,response) => {
    orderModel.getOrderById(request.params.id,(error, data) => {   
        if (error)
            response.status(500).send({
                message: error.message || "Some error occurred while retrieving users."
            });
        else 
            response.send(data);
    });
};

// Créer un order

createOrder = (request,response) => {
    orderModel.createOrder(request.body,(error, data) => {   
        if (error)
            response.status(500).send({
                message: error.message || "Some error occurred while creating order."
            });
        else 
            response.send(data);
    });
}


module.exports = {
    getAllOrders,
    getOrderById,
    createOrder
}