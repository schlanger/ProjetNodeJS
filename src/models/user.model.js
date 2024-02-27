const { response } = require('express');
const database = require('../database/db_connect.js')


const UserConstructor = function (user) {
    this.id = user.id
    this.firstname = user.firstname
    this.lastname = user.lastname
    this.email = user.email
    this.password = user.password
    this.age = user.age
};


// Récupérer l'ensemble des users

getAllUsers = result_bdd_request => {
    database.query("SELECT * FROM db_api.user", (error,response) => {
        if (error) {
            result_bdd_request(error);
        }
        // Le résultat de la requête est renvoyé
        result_bdd_request(null, response);
    });
};

module.exports = {  
    getAllUsers,
    UserConstructor
}