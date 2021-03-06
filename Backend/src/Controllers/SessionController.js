const User = require('../models/User')

class SessionController{
    async store(req, res){
        const { email, password }= req.body;

        const user = await User.findOne({ where: { email }})

        if(!user){
            return res.status(400).json({ error: "User not found" });
        }

        if(!await user.checkPassword(password)){
            return res.status(400).json({ error: "Password Incorrect" });
        }

        return res.json(user)
    }
}


module.exports = new SessionController;