const express = require("express");
const app = express();
const userRoutes = require("./routes/user.route");
const cors = require("cors");
const cookie_parser = require("cookie-parser");




//Middlewares
app.use(cookie_parser())
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true 
}));



//routes
app.use("/api", userRoutes)




module.exports = app;