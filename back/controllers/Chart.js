


class ChartController {

    static async getChart(req, resp) {

        let carrinho = await global.conn.collection("carrinhos").findOne({ account_id: req.account_id });

        await ChartController.loadCarrinhoProductDatas(carrinho);

        resp.json(carrinho);
    }

    static async loadCarrinhoProductDatas(carrinho) {

        for (var key in carrinho.produtos) {
            let prod = carrinho.produtos[key];
            prod.data = await global.db.getProdutoPorObjId(key);
        }

        return carrinho;
    }

    static async addProductInChart(req, resp) {

        let { id, quantidade } = req.params;
        quantidade = parseInt(quantidade);

        if (isNaN(quantidade))
            quantidade = 0;

        let conta = 0;

        let carrinho = await global.conn.collection("carrinhos").findOne({ account_id: req.account_id });

        if (carrinho == null) {
            resp.status(400).json({ error: 'Chart not found' });
            return;
        }

        let produtos = carrinho.produtos;

        if (produtos[id] === undefined) {
            produtos[id] = { quantidade: quantidade, preco: 25 }
        } else {
            produtos[id].quantidade += quantidade;
        }

        if (produtos[id].quantidade < 1)
            delete produtos[id];

        let result = await global.conn.collection("carrinhos").updateOne({ account_id: req.account_id },
            {
                $set: { produtos: produtos }
            }
        );

        if (result.result.nModified == 0)
            resp.status(400).json({ error: 'Unable to update cart' });


        await ChartController.loadCarrinhoProductDatas(carrinho);
        resp.json(carrinho);

    }

    static async modifyQuantityOnChart(req, resp) {

        let conta = 0;

        let { objId, quantidade } = req.params;

        quantidade = parseInt(quantidade);

        if (isNaN(quantidade))
            quantidade = 0;

        let carrinho = await global.conn.collection("carrinhos").findOne({ account_id: req.account_id });

        if (carrinho == null) {
            resp.status(400).send('Chart not found');
            return;
        }

        let produtos = carrinho.produtos;

        if (quantidade > 0) {
            produtos[objId] = { quantidade };
        } else {
            delete produtos[objId];
        }

        let dbResp = await global.conn.collection("carrinhos").updateOne({ account_id: req.account_id },
            {
                $set: { produtos: produtos }
            }
        );

        if (dbResp.result.nModified == 0) {
            resp.status(400).send('Unable to edit product quantity in chart');
            return;
        }


        await ChartController.loadCarrinhoProductDatas(carrinho);
        resp.json(carrinho);
    }

    static async confirmPurchase(req, res) {

        console.log(req.body);
        const purchase = req.body;
        delete purchase['_id'];
        purchase.account_id = req.account_id;

        await ChartController.loadCarrinhoProductDatas(purchase);

        const result = await global.conn.collection('purchases').insertOne(purchase);
       // console.log('result', result);
        if (result.result.ok === 1) {
            res.json({ status:'ok', purchase });
        } else {
            res.status(500).json({ error: "error on create purchase" });
        } 


    }
}

module.exports = ChartController;