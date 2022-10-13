const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const sendMail = require('../middleware/email-sender');

const LoginHandler = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.json({ status: false, message: "Email Or Password is required" });
    }
    try {
        const user = await User.findOne({ email: email });
        console.log(await bcrypt.compare(password, user.password))
        req.session.auth = true;
        req.session.email = user.email;
        res.cookie("email", user.email, { maxAge: 300000 });
        res.cookie("id", user.id, { maxAge: 300000 });
        req.session.save();
        return res.json({ status: true, message: "Login Successfully" });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

const signUpHandler = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const userName = req.body.userName;
    let password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const phoneNo = req.body.phoneNo;

    if (password !== confirmPassword) {
        return res.json({ status: false, message: 'Passwords & Confirmed Password do not match' });
    }
    if (phoneNo.length < 10) {
        return res.json({ status: false, message: 'Phone number must be 10 characters long' });
    }

    password = await bcrypt.hash(password, 10);
    try {
        const user = await User.create({ name, email, userName, password, phoneNo });
        return res.json({ status: true, data: user });
    }
    catch (e) {
        return res.json({ status: false, message: e.message });
    }
}

const resetPasswordHandler = async (req, res) => {
    let { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
        return res.status(200).json({
            success: false,
            message: 'User with the email is not found.',
        });
    }

    let resetPassword = user.generatePasswordReset();

    let result = await user.save();

    // Sent the password reset Link in the email.
    let html = `
          <div>
              <h1>Hello, ${user.name}</h1>
              <p>Please click the following link to reset your password.</p>
              <p>If this password reset request is not created by your then you can inore this email.</p>
              <a href="${"dsfds"}/reset-password?resetToken=${user.resetPasswordToken}">Reset Now</a>
          </div>`;

    console.log(
        `${'sfsdfs'}/reset-password?resetToken=${user.resetPasswordToken}`,
        'reset link'
    );

    await sendMail(
        "ritesh.singla36@gmail.com",
        'Reset Password',
        'Please reset your password.',
        html
    );

    return res.status(200).json({
        success: true,
        message: 'Password reset link is sent your email.',
    });
};

module.exports = { LoginHandler, signUpHandler, resetPasswordHandler };