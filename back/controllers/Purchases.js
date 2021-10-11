
const ObjectID = require('mongodb').ObjectID;

class PurchasesController {

    static async getPurchases(req, resp) {

        let purchases = await global.conn.collection("purchases").find({ account_id: req.account_id }).toArray();

        resp.json(purchases);
    }

    static async getPurchase(req, resp) {

        let purchase = await global.conn.collection("purchases").findOne({ _id: new ObjectID(req.params.id) });

        resp.json(purchase);
    }

    static async savePurchase(req, resp) {

        const _id = new ObjectID(req.body._id);

        let _oldPurchase = await global.conn.collection("purchases").findOne({ account_id: req.account_id, _id })

        if (_oldPurchase === null) {
            resp.status(500).json({ error: "Purchase not found" })
            return;
        }

        let newPurchase = preserveAllProductDatas(_oldPurchase, req.body);

        if (newPurchase === null) {
            resp.status(500).json({ error: "data corruption" });
            return;
        }

        delete newPurchase["_id"];
        newPurchase.modifiedAt = new Date().toISOString();

        let result = await global.conn.collection('purchases').updateOne({ _id }, { $set: newPurchase });

        newPurchase._id = req.body._id;

        if (result.result.ok === 1) {
            resp.json(newPurchase);
        } else {
            resp.status(500).json({ error: "failed to insert on db", result });
        }
    }

    static async changePurchaseAddress(req, resp) {

        const _id = new ObjectID(req.body._id);

        let _oldPurchase = await global.conn.collection("purchases").findOne({ account_id: req.account_id, _id })

        if (_oldPurchase === null) {
            resp.status(500).json({ error: "Purchase not found" })
            return;
        }

        let newPurchase = preserveAllProductDatas(_oldPurchase, req.body);

        if (newPurchase === null) {
            resp.status(500).json({ error: "data corruption" });
            return;
        }

        delete newPurchase["_id"];
        newPurchase.modifiedAt = new Date().toISOString();

        let result = await global.conn.collection('purchases').updateOne({ _id }, { $set: newPurchase });

        newPurchase._id = req.body._id;

        if (result.result.ok === 1) {
            resp.json(newPurchase);
        } else {
            resp.status(500).json({ error: "failed to insert on db", result });
        }
    }

    static async confirmDeliveryPayment(req, resp) {

        const _id = new ObjectID(req.params.id);

        let _oldPurchase = await global.conn.collection("purchases").findOne({ account_id: req.account_id, _id })

        if (_oldPurchase === null) {
            resp.status(500).json({ error: "Purchase not found" })
            return;
        }

        if (_oldPurchase.payment) {
            if (_oldPurchase.payment.status === 'approved') {
                resp.json({ error: "It has been paid" });
                return;
            }
        }

        _oldPurchase.payment = {
            form: "on_delivery",
            status: "payment_on_delivery"
        }

        delete _oldPurchase["_id"];

        _oldPurchase.modifiedAt = new Date().toISOString();

        let result = await global.conn.collection('purchases').updateOne({ _id }, { $set: _oldPurchase });

        _oldPurchase._id = _id;

        if (result.result.ok === 1) {
            resp.json(_oldPurchase);
        } else {
            resp.status(500).json({ error: "failed to insert on db", result });
        }
    }
}

function preserveAllProductDatas(oldPurchase, newPurchase) {

    newPurchase = Object.assign({}, newPurchase);

    for (let key in newPurchase.produtos) {
        let oldProduct = oldPurchase.produtos[key];
        if (!oldProduct)
            return null;

        newPurchase.produtos[key].data = oldProduct.data;
    }
    return newPurchase;
}



module.exports = PurchasesController;