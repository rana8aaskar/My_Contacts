const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
username : {
    type: String,
    required:[true,"Plaese add the user name."]
},
email: {
    type: String,
    required:[true, "Enter the email address."],
    unique: [true, "Email adderss already registered"]
},
password: {
    type: String,
    required: [true, "Please add the password."]
},
},
{
    timestamp: true,

});
 module.exports = mongoose.model("User",userSchema)