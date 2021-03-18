const mongoose = require('mongoose');

const User = mongoose.model('User', {
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});

module.exports = User;
