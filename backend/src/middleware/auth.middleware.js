const jwt = require("jsonwebtoken");


const atuhController = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        const check = jwt.verify(token, process.env.JWT_KEY);

        if (!check) {
            return res.status(409).json({
                message: 'user token not valide'
            })
        }

        req.user = check
        next()
    } catch (error) {
        return res.json({
            message:'Middlewares error'
        })
    }
};

module.exports = atuhController;