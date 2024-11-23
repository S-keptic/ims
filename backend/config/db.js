const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const connectDB = async()=>{
    try{
        mongoose.connect(process.env.MONGO_URI)
        console.log("database connected successfully")
    }catch(error){
        console.log(error)
    }
}

module.exports = connectDB;