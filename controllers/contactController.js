const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc GEt all contacts 
//@route GET /api/contacts
//@ public 

const getContacts =  asyncHandler(async(req,res) =>{
  
    const contacts = await Contact.find()
    res.status(200).json(contacts);

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
    const contact = await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).json(contact);

});
//@desc get new contacts 
//@route get/api/contacts
//@ public

const getContact = asyncHandler(async(req,res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);

});
//@desc update new contacts 
//@route put /api/contacts
//@ public

const updateContact = asyncHandler(async(req,res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updatedContact);

});
//@desc delete new contacts 
//@route delete /api/contacts
//@ public

const deleteContact = asyncHandler(async(req,res) =>{
    res.status(200).json({message: `Delete conatcts for ${req.params.id}`});

});
module.exports ={getContacts,createContact,getContact,updateContact,deleteContact}