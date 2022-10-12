const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    userName: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    phoneNo : {
        type: Number,
        max: 9999999999,
        trim: true,
        unique: true,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: true,
    },
    verified: { type: Boolean, default: false },
    verificationCode: { type: String, required: false },
    resetPasswordToken: { type: String, required: false },
    resetPasswordExpiresIn: { type: Date, required: false },
    lastLogin: { type: Date, default: Date.now },
    lastUpadteChecked: { type: Date, default: Date.now },

},
    {
        versionKey: false,
        timestamps: true,
    }
)

module.exports = mongoose.model('user', userSchema);