const mongoose = require('mongoose');

let User = mongoose.model('User', { id: String, name: String })

module.exports = User
