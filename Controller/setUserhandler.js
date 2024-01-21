const User = require("../Model/User")

let setUserHandler = async (req, res) => {
    let id = req.body.id
    let name = req.body.name
    let age = req.body.age
    let userData = await User.create({ id: id, name: name })
    res.send('success')
}

module.exports = setUserHandler