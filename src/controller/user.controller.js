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
        first_name: request.body.first_name,
        last_name: request.body.last_name,
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

// Mettre à jour un user

updateUserById = (request,response) => {
    if (!request.body) {
        response.status(400).send({
            message: "Content can not be empty!"
        });
    }

    userModel.updateUserById(request.params.id, new userModel.UserConstructor(request.body),(error, data) => {   
        if (error)
            response.status(500).send({
                message: error.message || "Some error occurred while updating the user."
            });
        else 
            response.send(data);
    });
}
deleteUserById = (request,response) => {
    userModel.deleteUserById(request.params.id,(error, data) => {   
        if (error)
            response.status(500).send({
                message: error.message || "Some error occurred while deleting the user."
            });
        else 
            response.send(data);
    });
}

module.exports = {
    getAllUsers, 
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
}