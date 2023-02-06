const express = require("express")
const router= express.Router()
const {userRegister,userLogin} = require("../controller/userController")
const {userFileUpload} = require("../controller/dataController")
const {getUserData} = require("../controller/dataController")
const {checkImgCode} = require("../controller/dataController")
const {authenticationCheck} = require("../middlewares/Authenticationmiddlware")

router.post("/register",userRegister)
router.post("/login",userLogin)


router.post("/fileupload",authenticationCheck,userFileUpload)
router.get("/userdata",authenticationCheck,getUserData)
router.post("/checkcode",authenticationCheck,checkImgCode)









module.exports = router