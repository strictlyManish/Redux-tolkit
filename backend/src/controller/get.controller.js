const UserModel = require("../model/user.model");

const GetCurrentUser = async (req, res) => {

    const current = req.user;
    const user = await UserModel.findOne({ _id: current.id })

    return res.json({
        user
    })
};


module.exports = GetCurrentUser