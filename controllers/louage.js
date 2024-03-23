const Louage = require("../models/louage.js");


const Createlouage = async(req,res,next)=> {
    const louagebody = req.body;
    const newlouage = new Louage(louagebody);
    try {
        await newlouage.save()
        .then(louage => res.status(200).json({message:"louage succesfully saved",louage}));
    } catch (error) {
        res.status(401).json({
            error:error.message
        })
    };
};

exports.Createlouage = Createlouage;

const Getlouage = async(req,res,next)=> {
    const {champ,valeur} = req.params;
    try {
        const louage = await Louage.findOne({[champ]:valeur});
        if (!louage) {
            res.status(401).json({
                message:"louage not found"
            });
        } else {
            res.status(200).json({
                louage
            });
        }
    } catch (error) {
        res.status(400).json({
            error:error.message
        });
    };
};

exports.Getlouage = Getlouage;

const GetAll = async(req,res,next)=> {

    try {
        const louages = await Louage.find();
        if (!louages) {
            res.status(401).json({
                message:"louages not found"
            });
        } else {
            res.status(200).json({
                louages
            });
        }
    } catch (error) {
        res.status(400).json({
            error:error.message
        });
    };
};

exports.GetAll = GetAll;
