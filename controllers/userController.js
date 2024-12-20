const asyncHandler = require("express-async-handler")

//@desc Register a user
//@route Post/api/contacts
//@ public 

const registerUser =  asyncHandler(async(req,res) => {
    res.json({message: "Register the user"})
});

//@desc Login a user
//@route Post/api/contacts
//@ public 

const loginUser =  asyncHandler(async(req,res) => {
    res.json({message: "Login the user"})
});

//@desc current user
//@route Get/api/contacts
//@ public 

const currentUser =  asyncHandler(async(req,res) => {
    res.json({message: "Current user information."})
});
module.exports = {registerUser,loginUser,currentUser}