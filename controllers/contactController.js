const asyncHandler = require("express-async-handler")
//@desc GEt all contacts 
//@route GET /api/contacts
//@ public

const getContacts =  asyncHandler(async(req,res) =>{
    res.status(200).json({message: "Get all contacts"});

});

//@desc create new contacts 
//@route post /api/contacts
//@ public

const createContact = asyncHandler(async(req,res) =>{
    console.log("the req body is",req.body);
    const{name,email,phone}= req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are required.")
    }

    res.status(201).json({message: "Create contacts"});

});
//@desc get new contacts 
//@route put /api/contacts
//@ public

const getContact = asyncHandler(async(req,res) =>{
    res.status(200).json({message: `Get contacts for ${req.params.id}`});

});
//@desc update new contacts 
//@route put /api/contacts
//@ public

const updateContact = asyncHandler(async(req,res) =>{
    res.status(200).json({message: `Update conatcts for ${req.params.id}`});

});
//@desc delete new contacts 
//@route delete /api/contacts
//@ public

const deleteContact = asyncHandler(async(req,res) =>{
    res.status(200).json({message: `Delete conatcts for ${req.params.id}`});

});
module.exports ={getContacts,createContact,getContact,updateContact,deleteContact}