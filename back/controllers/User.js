
const jwt = require('jsonwebtoken');


class UserController {

    static async login(req, res) {
        
        console.log(req.body);

        let user = await global.conn.collection('users').findOne({
            login: req.body.login,
            password: req.body.password
        });

        if (user !== null) {
            const id = user._id; //esse id viria do banco de dados
            const token = jwt.sign({ id }, process.env.SECRET, {
              expiresIn: 60*60 // expires in 5min
            });
            return res.json({ auth: true, token: token, id });            
        }
        
        res.status(500).json({message: 'Login inválido!'});
    }
}

module.exports = UserController;

