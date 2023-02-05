const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const validator = require("validator")
const jwt = require("jsonwebtoken")
require("dotenv").config()


const createToken = (_id)=>{
const jwtkey = process.env.JWT_SECRET_KEY
return jwt.sign({_id},jwtkey,{expiresIn:"3d"})
}


const userRegister = async(req,res)=>{

    try{
        const {name,email,password} = req.body
        let user = await userModel.findOne({email})
     console.log(user)
        if(user) return res.status(400).json("User already exists....")
    
        if(!name || !email || !password) return res.status(400).json("All fields are required")
    
        if(!validator.isEmail(email)) return res.status(400).json("Email must be valid")
    
        // if(!validator.isStrongPassword(password)) return res.status(400).json("password must be strong")
    
        user = new userModel({name,email,password})
      //  console.log(user,"user")
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password,salt)
    
        await user.save()
        // console.log(user)
        const token = createToken(user._id)
    
        res.status(200).json({
            _id:user._id,
            name,
            email,
        })
    }

  catch(err){
    console.log(err)
    res.status(500).json(err)
  }
}


const userLogin = async(req,res)=>{

  try{
      const {email,password} = req.body
      if(!email || !password) return res.status(400).json("All fields are required")
  
      let user = await userModel.findOne({email})

      if(!user) return res.status(400).json("User not found")

      const isValiPassword = await bcrypt.compare(password,user.password)
      
      if(!isValiPassword) return res.status(400).json("Invalid Password")

      const token = createToken(user._id)
  
      res.status(200).json({
          _id:user._id,
        name:  user.name,
          email,
          token
      })
  }

catch(err){
  console.log(err)
  res.status(500).json(err)
}
}


module.exports= {
    userRegister,
    userLogin
}