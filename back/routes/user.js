const UserController = require('../controllers/User');

module.exports = (app) => {

    app.post("/login", UserController.login);

    app.post("/register", UserController.register);

}
