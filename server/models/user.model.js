const mongoose = require('mongoose');
const crypto = require('crypto');

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
    phoneNo: {
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
    resetPasswordToken: { 
        type: String,
        required: false
    },
    resetPasswordExpiresIn: { 
        type: Date,
        required: false
    },

},
    {
        versionKey: false,
        timestamps: true,
    }
)

userSchema.methods.generatePasswordReset = function () {
    this.resetPasswordExpiresIn = Date.now() + 36000000;
    this.resetPasswordToken = crypto.randomBytes(20).toString('hex');
};

module.exports = mongoose.model('user', userSchema);