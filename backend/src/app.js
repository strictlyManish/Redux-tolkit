const express = require("express");
const app = express();
const userRoutes = require("./routes/user.route");


//Middlewares
app.use(express.json());

//routes
app.use("/api",userRoutes)







module.exports = app;