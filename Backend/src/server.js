import express from "express"
import { ENV } from "./lib/env.js";


const app = express();

app.get("/",(req,res)=>{
    res.status(200).json({msg:'api working sucessfully manih'})
});

app.listen(ENV.PORT,()=>{
    console.log('Server Runnig on Port:',ENV.PORT)
})