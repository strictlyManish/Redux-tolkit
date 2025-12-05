const express = require("express");
const { RegisterController, LoginController } = require("../controller/user.controller");
const routes = express.Router();

routes.post("/register",RegisterController)
routes.post("/login",LoginController)



module.exports = routes;