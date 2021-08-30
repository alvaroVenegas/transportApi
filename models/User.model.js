const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        userName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: {type: String, required: true},
        password: {type: String, required: true},
        rol: {
            type: String,
            required: true,
            enum: ['admin', 'driver', 'office'],
            default: 'driver'
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('users', userSchema);

module.exports = User;