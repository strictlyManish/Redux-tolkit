const UserModel = require("../model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const RegisterController = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const Checkuser = await UserModel.findOne({ email });

        if (Checkuser) {
            return res.status(406).json({
                message: 'User exist with this email',
            })
        };

        const hashpass = await bcrypt.hash(password, 10)
        const user = await UserModel.create({
            fullname, email,
            password: hashpass
        })
        const token = jwt.sign({ id: user._id }, process.env.JWT_KEY)
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
        return res.status(417).json({
            message: 'Something is not going good',
        })
    }
};

const LoginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(409).json({
                message: 'Invalide User',
            })
        };

        const passCheck = bcrypt.compare(password,user.password)

        if (!passCheck) {
            return res.status(409).json({
                message: 'Kindly check password',
            })
        };

        const token = jwt.sign({id: user._id}, process.env.JWT_KEY);
        res.cookie("token", token);

        return res.status(200).json({
            message: 'User Logged In',
            data: {
                name: user.fullname,
                email
            }
        })
    } catch (error) {``
        console.log(error)
        return res.status(417).json({
            message: 'Something is not going good',
        })
    }
};

module.exports = { RegisterController, LoginController }