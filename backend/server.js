const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const connectDB = require("./config/db.js")
const app = express()

const PORT = 5000;
app.use(express.json())
app.use(cors())

app.use('/api/auth', require('./routes/authRoutes.js'));
app.use('/api/products', require('./routes/productRoutes.js'));

app.listen(PORT,()=>{
    try{
        connectDB();
        console.log(`server is up on ${PORT}`)
    }catch(error){
        console.log("error")
    }
})
