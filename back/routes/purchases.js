const PurchasesController = require('../controllers/Purchases');
const verifyJWT = require('../auth/verifyJWT');

module.exports = (app) => {

    app.get("/purchases/", verifyJWT, PurchasesController.getPurchases);


    
}
