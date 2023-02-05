const jwt = require("jsonwebtoken")
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmNTY5YzczZDEyYTk2ZmVmMjY5ZGEiLCJpYXQiOjE2NzU1ODQ2MjIsImV4cCI6MTY3NTg0MzgyMn0.nnSbKd6eOaYkRvmkd_RVzu-gsSBoc_NcZCnm4goAWgE
const authenticationCheck = (req,res,next)=>{

    if(!req.headers.authorization){
        return res.send("please login again")
    }
    const user_token = req.headers["authorization"]
 
   jwt.verify(user_token,"supersecret123",function(err,decoded){
        if(err){
            return res.send("invalid credentials")
        }
        // console.log(decoded,"decoded")
        
        // passign the email in req in body
        req.body.userId = decoded._id
        next()
    })



}

module.exports={
    authenticationCheck
}