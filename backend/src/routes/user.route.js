const express = require("express");
const { RegisterController, LoginController, LogoutController } = require("../controller/user.controller");
const GetCurrentUser = require("../controller/get.controller");
const atuhController = require("../middleware/auth.middleware");
const routes = express.Router();





routes.post("/register",RegisterController);
routes.post("/login",LoginController);
routes.get("/logout",LogoutController);


routes.get("/", atuhController, GetCurrentUser);

module.exports = routes;