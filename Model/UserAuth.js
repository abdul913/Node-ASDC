const mongoose = require('mongoose');


let UserAuth = mongoose.model('UserAuth', { id: String, email: String, password: String })

module.exports = UserAuth