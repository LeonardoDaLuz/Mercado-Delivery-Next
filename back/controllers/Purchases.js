


class PurchasesController {

    static async getPurchases(req, resp) {

        let purchases = await global.conn.collection("purchases").find({ account_id: req.account_id }).toArray();

        resp.json(purchases);
    }

  
}

module.exports = PurchasesController;