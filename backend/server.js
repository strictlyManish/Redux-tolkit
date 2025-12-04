require('dotenv').config();
const app = require("./src/app");

app.listen(4000,function(){
    console.log('Server Runnig on port 4000')
});