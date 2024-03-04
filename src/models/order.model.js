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
module.exports = {  
    getAllOrders,
    OrderConstructor
}
