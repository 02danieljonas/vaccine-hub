const express = require("express");
const router = express.Router()

router.post("/login", async (req, res, next)=>{
    try{
        //take users email and passwords and attempting to authenticate them

    }catch(err){
        next(err)
    }
})

router.post("/register", async (req, res, next)=>{
    try{
        //take users email,  password etc
        // and create a new user in our database
    }catch(err){
        next(err)
    }
})


module.exports = router