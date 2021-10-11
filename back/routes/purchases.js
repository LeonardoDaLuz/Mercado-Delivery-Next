const PurchasesController = require('../controllers/Purchases');
const verifyJWT = require('../auth/verifyJWT');

module.exports = (app) => {

    app.get("/purchases/", verifyJWT, PurchasesController.getPurchases);


    app.get("/purchases/:id", verifyJWT, PurchasesController.getPurchase);

    app.post("/purchases/:id", verifyJWT, PurchasesController.savePurchase);

    app.post("/purchases/:id/change_address", verifyJWT, PurchasesController.changePurchaseAddress);

    app.post("/purchases/:id/confirmDeliveryPayment", verifyJWT, PurchasesController.confirmDeliveryPayment);
    
}
