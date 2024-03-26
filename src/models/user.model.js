const { response } = require('express');
const database = require('../database/db_connect.js')


const UserConstructor = function (user) {
    this.id = user.id
    this.username = user.username
    this.password = user.password
    this.first_name = user.first_name
    this.last_name = user.last_name
    this.email = user.email
    this.age = user.age
};


// Récupérer l'ensemble des users

getAllUsers = result_bdd_request => {
    database.query("SELECT * FROM db_api.user", (error,response) => {
        if (error) {
            result_bdd_request(error);
        }
        // Le résultat de la requête est renvoyé
        result_bdd_request(null, response.rows);
    });
};

// Récupérer un user par son id

getUserById = (id, result_bdd_request) => {
    database.query("SELECT * FROM db_api.user WHERE id = $1", [id], (error, response) => {
        if (error) {
            result_bdd_request(error);
        }
        // Le résultat de la requête est renvoyé
        //console.log(response.rows[0]);
        result_bdd_request(null, response.rows);
    });
};

// Créer un user

createUser = (user, result_bdd_request) => {
    const {username,password,first_name,last_name,email,age } = user; // Assurez-vous d'avoir les mêmes noms de colonnes que dans votre table

    database.query(
        "INSERT INTO db_api.user (username,password,first_name,last_name,email,age) VALUES ($1, $2, $3, $4, $5, $6)",
        [username, password, first_name, last_name, email, age], // Passer les valeurs à insérer dans le même ordre que les colonnes
        (error, response) => {
            if (error) {
                result_bdd_request(error);
            }
            // Le résultat de la requête est renvoyé
            result_bdd_request(null, response.rows);
        }
    );
}

// Mettre à jour un user

updateUserById = (id, user, result_bdd_request) => {
    const {username,password,first_name,last_name,email,age } = user;

    database.query(
        "UPDATE db_api.user SET username = $1, password = $2, first_name = $3, last_name = $4, email = $5, age = $6 WHERE id = $7",
        [username, password, first_name, last_name, email, age, id],
        (error, response) => {
            if (error) {
                result_bdd_request(error);
            }
            // Le résultat de la requête est renvoyé
            result_bdd_request(null, response.rows);
        }
    );
}

// Supprimer un user
deleteUserById = (id, result_bdd_request) => {
    database.query("DELETE FROM db_api.user WHERE id = $1", [id], (error, response) => {
        if (error) {
            result_bdd_request(error);
        }
        // Le résultat de la requête est renvoyé
        result_bdd_request(null, response.rows);
    });
}

module.exports = {  
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
    UserConstructor
}