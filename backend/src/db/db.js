const mongoose = require("mongoose");

const connectDatabase = async () =>{
    try {
        await mongoose.connect(process.env.MONGOOSE_URI);
        console.log('Database Connceted Sucessfully ✅')
    } catch (error) {
        console.log(`Error : - ${error}`)
    }
};

module.exports = connectDatabase;