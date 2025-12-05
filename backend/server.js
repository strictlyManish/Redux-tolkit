require('dotenv').config();
const app = require("./src/app");
const connectDatabase = require("./src/db/db");




connectDatabase();
app.listen(4000,()=>{
    console.log('Server Runnig On Port 4000')
});