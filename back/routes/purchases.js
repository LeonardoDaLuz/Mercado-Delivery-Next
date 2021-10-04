const PurchasesController = require('../controllers/Purchases');
const verifyJWT = require('../auth/verifyJWT');

module.exports = (app) => {

    app.get("/purchases/", verifyJWT, PurchasesController.getPurchases);


    app.get("/purchases/:id", verifyJWT, PurchasesController.getPurchase);

    app.post("/purchases/:id", verifyJWT, PurchasesController.savePurchase);

    
}
