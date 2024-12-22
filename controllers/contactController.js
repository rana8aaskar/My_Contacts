const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc GEt all contacts 
//@route GET /api/contacts
//@ private 

const getContacts =  asyncHandler(async(req,res) =>{
  
    const contacts = await Contact.find({user_id: req.user.id} );
    res.status(200).json(contacts);

});

//@desc create new contacts 
//@route post /api/contacts
//@ private

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
        user_id: req.user.id
    });
    res.status(201).json(contact);

});
//@desc get new contacts 
//@route get/api/contacts
//@ private

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
//@ private

const updateContact = asyncHandler(async(req,res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    if(contact.user_id.toString() !=req.user.id){
        res.status(403);
        throw new Error("user don't have permission to update other user.")
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
//@ private

const deleteContact = asyncHandler(async(req,res) =>{
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    if(contact.user_id.toString() !=req.user.id){
        res.status(403);
        throw new Error("user don't have permission to delete other user.")
    }

    await Contact.deleteOne({_id: req.params.id});
    res.status(200).json(contact);

});
module.exports ={getContacts,createContact,getContact,updateContact,deleteContact}