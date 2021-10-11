const ChartController = require('../controllers/Chart');
const verifyJWT = require('../auth/verifyJWT');

module.exports = (app) => {

    app.get("/carrinho/", verifyJWT, ChartController.getChart);

    app.post("/carrinho/addproduto/:id/:quantidade", verifyJWT, ChartController.addProductInChart);

    app.post("/carrinho/modificarQuantidadeProduto/:objId/:quantidade", verifyJWT, ChartController.modifyQuantityOnChart);

    app.post("/chart/confirm_purchase", verifyJWT, ChartController.confirmPurchase);
    
    app.post("/chart/restorePurchaseToMyChart", verifyJWT, ChartController.restorePurchaseToMyChart);
    
}
