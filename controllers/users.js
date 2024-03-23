const User = require("../models/users");
const bcrypt = require("bcryptjs");

const Login = async(req,res,next) => {
    const {username, password}=req.body;
    if (!username || !password){
        return res.status(400).json({message:"Username or Password not present"});
    }
    try {
        const user = await User.findOne({username});
        if (!user) {
            res.status(401).json({
                message:"login not successful",
                error:"user not found"
            });
        } else if (!bcrypt.compareSync(password, user.password)) {
            res.status(401).json({
                message: "login not successful",
                error: "wrong password",
            });
        } else {
            res.status(200).json({
                message:"login successful"
            })
        }
    } catch (error) {
        res.status(400).json({
            message:"An error occured",
            error:error.message
        })
    }
}

exports.Login = Login;


const Register = async (req, res,next)=> {
    const userbody = req.body;
    userbody.password = bcrypt.hashSync(userbody.password, 10);
    const newUser = new User(userbody);
    try {
        await newUser.save().then(user => {
            res.status(200).json({
                message:"User successfully saved"
            })
        });
    } catch (err){
        res.status(401).json({
            message:"User not successful created",
            error:err.message,
        })
    };
};

exports.Register = Register;