//  Basic imports
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
mongoose.set('strictQuery', true)   
const app = express()
require("dotenv").config()

const fileupload = require("express-fileupload")


//middleware fileupload for reading the files from the user request

app.use(fileupload({
    useTempFiles: true
}))

//  Ports and Urls
const port = process.env.PORT || 5000
const url = process.env.ATLAS_URL


//  Midlewares
// app.use(express.json())
app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb",extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

// .env File wont be pushed in github refer these credentials for validation
// JWT_SECRET_KEY = supersecret123

const userRouter = require("./routes/userRoute")






app.use("/user",userRouter)













app.listen(port, (req,res)=>{
console.log(`server running on port : ${port}`)
})

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("mongodb connection stablished")).catch((err)=>{
    console.log("mongodb connection failed err :",err.message)
})


// mongodb+srv://gupt:gupt123@cluster0.nnfhjk6.mongodb.net/?retryWrites=true&w=majority