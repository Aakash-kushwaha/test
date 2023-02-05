const express = require("express")
const app = express()
const cloudinary = require('cloudinary').v2;
const {dataModel} = require("../models/dataModel")


//  We are going to use cloudinary cloud database to save the files and get the url .
//  these are the credentials for cloudinary 

cloudinary.config({
    cloud_name: 'dlvxzqbhc',
    api_key: '917435935796937',
    api_secret: 'bkH_MVgjBoMyCOrc04yBhjpedms',
    secure: true
});

//  Random 8 digit Image code
const randomInt = ()=>{
    let imgCode = Math.floor(100000 + Math.random() * 900000)
       return imgCode
}


const userFileUpload =async(req,res)=>{
    const file = req
    console.log(file,"body_file")
    if(!file) return res.status(400).json("File not received")
   
//  let data =  await  cloudinary.uploader.upload(file,(err, res) => {
//         if (err) {
//             console.log(err)
//         }
//           return res
//     })
    
//     if(data){
//         // console.log(data)
//       let imgCode =  randomInt()
//         let userFile = new dataModel({
//             userId:req.body.userId,
//             imgurl :data.url,
//             imgCode
//         })
//         await userFile.save()
//         res.status(200).json({
//            imgurl:data.url,
//            imgCode
//         })
//     }else{
//         res.status(400).json("invalid request")
//     }
res.send("success")
}


const getUserData =async(req,res)=>{

    const userId = req.body.userId

    const userData = await dataModel.find({userId})
    // console.log(userData)
    res.send({userData})

}

const checkImgCode =async(req,res)=>{
    const imgCode = req.query.imgCode
    if(!imgCode) return res.status(400).json("Kindly provide Image Code")

    const checkCode = await dataModel.findOne({imgCode})
    if(!checkCode) return res.status(400).json("Not Found")
    return res.status(200).json({
        imgStatus:"varified",
    })

}




module.exports={
    userFileUpload,
    getUserData,
    checkImgCode
}