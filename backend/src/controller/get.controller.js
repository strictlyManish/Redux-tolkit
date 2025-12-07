const UserModel = require("../model/user.model");

const GetCurrentUser = async (req,res)=>{

    const user = req.user;



    const getuser = await UserModel.findOne({_id:user.id})

    res.json({
        getuser
    })
};


module.exports = GetCurrentUser