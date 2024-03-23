const mongoose = require("mongoose");


const UsersSchema = mongoose.Schema({
    username: {
        type:String,
        unique:true,
        required:true,
    },
    number: {
        type:String,
        required:true,
    },
    mail : {
        type:String,
        unique:true,
        required:true
    },
    password: {
        type:String,
        minLength:6,
        required:true,
    },
});

const User = mongoose.model('Users', UsersSchema);
module.exports =  User;