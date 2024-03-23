const Colis = require("../models/Colis.js");


const CreateColis= async(req,res,next)=> {
    const colisbody = req.body;
    const newcolis = new Colis(colisbody);
    try {
        await newcolis.save()
        .then(Colis => res.status(200).json({message:"colis succesfully saved",colis}));
    } catch (error) {
        res.status(401).json({
            error:error.message
        })
    };
};

exports.CreateColis = CreateColis;

const GetColis = async(req,res,next)=> {
    const {champ,valeur} = req.params;
    try {
        const colis = await Colis.findOne({[champ]:valeur});
        if (!colis) {
            res.status(401).json({
                message:"colis not found"
            });
        } else {
            res.status(200).json({
                colis
            });
        }
    } catch (error) {
        res.status(400).json({
            error:error.message
        });
    };
};

exports.GetColis = GetColis;

const GetAll = async(req,res,next)=> {

    try {
        const colis = await Colis.find();
        if (!colis) {
            res.status(401).json({
                message:"colis not found"
            });
        } else {
            res.status(200).json({
                colis
            });
        }
    } catch (error) {
        res.status(400).json({
            error:error.message
        });
    };
};

exports.GetAll = GetAll;
