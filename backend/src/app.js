const express = require('express');
const userRoutes = require("./routes/user.route");


const app = express();

app.use("/api",userRoutes)






module.exports = app