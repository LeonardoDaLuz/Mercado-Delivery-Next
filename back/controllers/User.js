
const jwt = require('jsonwebtoken');


class UserController {

    static async login(req, res) {

        let user = await global.conn.collection('users').findOne({
            login: req.body.login,
            password: req.body.password
        });

        if (user !== null) {
            const id = user._id; //esse id viria do banco de dados
            const token = jwt.sign({ id }, process.env.SECRET, {
                expiresIn: 60 * 60 // expires in 5min
            });
            return res.json({ auth: true, token: token, id });
        }

        res.status(500).json({ message: 'Login inválido!' });
    }

    static async register(req, res) {

        let user = await global.conn.collection('users').findOne({
            login: req.body.email,
        });

        if (user !== null)
            return res.status(500).json({ message: 'Este email já está cadastrado' });

        let newUser = req.body;
        
        newUser.login = newUser.email;
        delete newUser.email;

        let result = await global.conn.collection('users').insertOne(newUser);

        res.json({ register: true, insertedId: result.insertedId });



    }
}

module.exports = UserController;

