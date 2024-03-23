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


const ColisSchema = mongoose.Schema({
    id:{
        type:Number,
        unique: true,
        required:true
    },
    idLouage:{
        type:Number,
        unique: true,
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
    geoLoc:LocationSchema,
});

const Colis = mongoose.model('Colis', ColisSchema);
module.exports =  Colis;