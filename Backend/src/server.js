import express from "express";
import path from "path";

import { ENV } from "./lib/env.js";

const app = express();

const __dirname = path.resolve();



app.get("/health",(req,res)=>{
    res.status(200).json({msg:'api working sucessfully ,  working health routes'})
});

app.get("/books",(req,res)=>{
    res.status(200).json({msg:'api working sucessfully manih working health books'})
});

// make our app for development
if(ENV.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get("/{*any}",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })
}



app.listen(ENV.PORT,()=>{
    console.log('Server Runnig on Port:',ENV.PORT)
})