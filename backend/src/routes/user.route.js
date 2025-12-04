const express = require("express");
const { userRegisterController, UserLoginController } = require("../controller/user.controller");
const route = express.Router();


route.post("/register",userRegisterController)
route.post("/login",UserLoginController)



module.exports = route