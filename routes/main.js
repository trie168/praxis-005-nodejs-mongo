const register = require("./register.route");
const login = require("./login.route");
const author = require("./author");
const book = require("./book");
const user = require("./user");
const index = require("./index");

const routes = app => {
    app.use("/register", register);
    app.use("/login", login);
    app.use("/user", user);
    app.use("/book", book);
    app.use("/author", author);
    app.use("/index", index);
};

module.exports = routes;
