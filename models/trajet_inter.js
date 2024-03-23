const mongoose = require("mongoose");

const TrajetInterSchema = new mongoose.Schema({
        depart:{
            type:String,
            required:true
        },
        arrive:{
            type:String,
            required:true
        },
        tarif:{
            type:Number,
            required:true
        },
        duree:{
            type:Number
        }
});
const TrajetInter = mongoose.model('TrajetsInter', TrajetInterSchema);
module.exports =  TrajetInter;