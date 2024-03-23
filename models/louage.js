const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    }
});


const LouageSchema = mongoose.Schema({
    id:{
        type:Number,
        unique: true,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    statut:{
        type:String,
        required:true
    },
    depart:{
        type:String,
        required:true
    },
    DepartgeoLoc:LocationSchema,

    destination:{
        type:String,
        required:true
    },
    DestinationgeoLoc:LocationSchema,
    nbr_passager:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    geoLoc:LocationSchema,

    chauffeur:{
        type:String
    }
});

const Louage = mongoose.model('Louages', LouageSchema);
module.exports =  Louage;