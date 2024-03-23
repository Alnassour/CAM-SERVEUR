const trajetinter = require("../models/trajet_inter.js");


const CreateTrajet = async(req,res,next)=> {
    const trajetbody = req.body;
    const newtrajet = new trajetinter(trajetbody);
    try {
        await newtrajet.save()
        .then(trajet => res.status(200).json({message:"trajet succesfully saved",trajet}));
    } catch (error) {
        res.status(401).json({
            message:"trajet not successful created",
            error:error.message
        })
    };
};

exports.CreateTrajet = CreateTrajet;

const GetTrajet = async(req,res,next)=> {
    try {
        const trajet = await trajetinter.find();
        if (!trajet) {
            res.status(401).json({
                message:"trajet not found"
            });
        } else {
            res.status(200).json({
                message:"trajet found",
                trajet
            });
        }
    } catch (error) {
        res.status(400).json({
            message:"An error occured",
            error:error.message
        });
    };
};

exports.GetTrajet = GetTrajet;
