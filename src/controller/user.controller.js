const { response } = require('express')
const userModel = require('../models/user.model')

// Récupérer l'ensemble des users 

getAllUsers = (request,response) => {
    userModel.getAllUsers((error, data) => {   
        if (error)
            response.status(500).send({
                message: error.message || "Some error occurred while retrieving users."
            });
        else 
            response.send(data);
    });
};

module.exports = {
    getAllUsers 
}