const Station = require("../models/station.js");


const CreateStation = async(req,res,next)=> {
    const stationbody = req.body;
    const newstation = new Station(stationbody);
    try {
        await newstation.save()
        .then(station => res.status(200).json({message:"station succesfully saved",station}));
    } catch (error) {
        res.status(401).json({
            message:"station not successful created",
            error:error.message
        })
    };
};

exports.CreateStation = CreateStation;

const GetStation = async(req,res,next)=> {
    try {
        const station = await Station.find();
        if (!station) {
            res.status(401).json({
                message:"station not found"
            });
        } else {
            res.status(200).json({
                message:"station found",
                station
            });
        }
    } catch (error) {
        res.status(400).json({
            message:"An error occured",
            error:error.message
        });
    };
};

exports.GetStation = GetStation;
