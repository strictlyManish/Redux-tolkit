const UserModel = require("../model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const RegisterController = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const Checkuser = await UserModel.findOne({ email });

        if (Checkuser) {
            return res.status(403).json({
                message: 'User exist with this email',
            })
        };

        const hashpass = await bcrypt.hash(password, 10)
        const user = await UserModel.create({
            fullname, email,
            password: hashpass
        })
        const token = jwt.sign({ id: user._id },process.env.JWT_KEY)
        res.cookie('token', token)
        return res.status(201).json({
            message: 'User created sucessfully',
            userData: {
                fullname,
                email
            }
        });
    } catch (error) {
        console.log(error)
        return res.status(409).json({
            message: 'Something is not going good',
        })
    }
};

const LoginController = async (req, res) => {
    try {

    } catch (error) {

    }
};

module.exports = { RegisterController, LoginController }