
const mongoose = require("mongoose")

const dbConnection =()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/PORTFOLIO")
    .then(()=>{
        console.log("DATABASE CONNECTION SUCCESSFULLY");
    })
    .catch((err)=>{
        console.log("database connection error",err)
    })
}
module.exports = dbConnection;