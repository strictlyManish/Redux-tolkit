const UserModel = require("../model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const RegisterController = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        if (!fullname || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists with this email' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await UserModel.create({
            fullname,
            email,
            password: hashedPassword
        });

        const token = jwt.sign({ id: user._id }, process.env.JWT_KEY, { expiresIn: '1h' });

        res.cookie('token', token, {
            httpOnly: true,
           
        });

        return res.status(201).json({
            message: 'User created successfully',
            userData: { fullname, email }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
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

        const passCheck = bcrypt.compare(password, user.password)

        if (!passCheck) {
            return res.status(409).json({
                message: 'Kindly check password',
            })
        };

        const token = jwt.sign({ id: user._id }, process.env.JWT_KEY);
        res.cookie("token", token);

        return res.status(200).json({
            message: 'User Logged In',
            data: {
                name: user.fullname,
                email
            }
        })
    } catch (error) {
        ``
        console.log(error)
        return res.status(417).json({
            message: 'Something is not going good',
        })
    }
};

const LogoutController = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,       // keep true in production
    sameSite: "none"    // only if you're using cross-origin frontend
  });

  return res.status(200).json({ message: "Logged out successfully" });
};

module.exports = { RegisterController, LoginController,LogoutController }