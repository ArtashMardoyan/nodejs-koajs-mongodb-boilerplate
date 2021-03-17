const mongoose = require('mongoose');

const User = mongoose.model('User', {
    email: String,
    lastName: String,
    firstName: String,
    password: String
});

module.exports = User;
