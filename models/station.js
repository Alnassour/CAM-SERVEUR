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


const StationSchema = mongoose.Schema({
    ville:{
        type:String,
        required:true
    },
    localisation: LocationSchema

})

const Station = mongoose.model('Stations', StationSchema);
module.exports =  Station;