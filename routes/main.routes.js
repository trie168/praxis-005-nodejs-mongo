const register = require("./register.routes")
const activation = require("./activation.routes")
const login = require("./login.routes")

const routes = (app) => {
    app.use("/register", register)
    app.use("/activation", activation)
    app.use("/login", login)
}

module.exports = routes