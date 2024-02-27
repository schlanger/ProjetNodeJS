const { response } = require('express')
const userModel = require('../models/user.model');
const { get } = require('../server');

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

// Récupérer un user par son id
getUserById = (request,response) => {
    userModel.getUserById(request.params.id,(error, data) => {   
        if (error)
            response.status(500).send({
                message: error.message || "Some error occurred while retrieving users."
            });
        else 
            response.send(data);
    });
};

// Créer un user

createUser = (request,response) => {
    if (!request.body) {
        response.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const user = new userModel.UserConstructor({
        id: request.body.id,
        username: request.body.username,
        password: request.body.password,
        firstname: request.body.firstname,
        lastname: request.body.lastname,
        email: request.body.email,
        age: request.body.age
    });

    userModel.createUser(user,(error, data) => {   
        if (error)
            response.status(500).send({
                message: error.message || "Some error occurred while creating the user."
            });
        else 
            response.send(data);
    });
}

module.exports = {
    getAllUsers, 
    getUserById,
    createUser
}