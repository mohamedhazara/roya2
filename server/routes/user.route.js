const express=require("express")
const{registerUser,loginUser, getAllusers, countUsers,removeUser, getSigleUser}=require("../controllers/user.controler");
const { requireSignin, isAdmin, bothAdminAdUser } = require("../middlewares/authentication");

   const router=express.Router()


router.post("/register",registerUser)
router.post("/login",loginUser)


//admin routes for users

router.get("/users",requireSignin,isAdmin,getAllusers)
router.get("/users/count",requireSignin,isAdmin,countUsers)
router.delete("/user/:id",requireSignin,isAdmin,removeUser)
router.get("/user/getone/:id",requireSignin,getSigleUser)






module.exports = router;