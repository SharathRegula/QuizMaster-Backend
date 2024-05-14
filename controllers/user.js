const User = require("../db/models/user");

async function handleCreateuser(req, res) {
    const body = req.body;
    const Userinfo = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: body.password,
       });
    return res.status(200).json(Userinfo);
  }

  module.exports={
    handleCreateuser
}