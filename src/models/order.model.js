const database = require('../database/db_connect.js')

const OrderConstructor = function (order) {
    this.id = order.id
    this.prix = order.prix
    this.nom = order.nom
    this.quantite = order.quantite
    this.date = order.date
    this.reference = order.reference
};

// Récupérer l'ensemble des orders

getAllOrders = result_bdd_request => {

    database.query("SELECT * FROM db_api.commande", (error,response) => {
        if (error) {
            result_bdd_request(error);
        }
        // Le résultat de la requête est renvoyé
        result_bdd_request(null, response);
    });
}

// Récupérer un order par son id

getOrderById = (id, result_bdd_request) => {

    database.query("SELECT * FROM db_api.commande WHERE id = $1", [id], (error, response) => {
        if (error) {
            result_bdd_request(error);
        }
        // Le résultat de la requête est renvoyé
        result_bdd_request(null, response);
    })
}

createOrder = (newOrder, result_bdd_request) => {   
    database.query("INSERT INTO db_api.commande (prix, nom, quantite, date, reference) VALUES ($1, $2, $3, $4, $5)", [newOrder.prix, newOrder.nom, newOrder.quantite, newOrder.date, newOrder.reference], (error, response) => {
        if (error) {
            result_bdd_request(error);
        }
        // Le résultat de la requête est renvoyé
        result_bdd_request(null, response);
    })
}






module.exports = {  
    getAllOrders,
    getOrderById,
    createOrder,
    OrderConstructor
}
