const express = require("express");
const app = express();
const userRoutes = require("./routes/user.route");
const cors = require("cors");

//Middlewares
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",   // Allow requests only from this origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    credentials: true                  // Allow cookies/authorization headers
}));
//routes
app.use("/api", userRoutes)







module.exports = app;