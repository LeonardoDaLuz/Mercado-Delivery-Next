const UserController = require('../controllers/User');

module.exports = (app) => {

    app.post("/login", UserController.login);

}
