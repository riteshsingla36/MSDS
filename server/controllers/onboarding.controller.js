const express = require('express');
const User = require('../models/user.model');
const crypto = require('crypto');
const { sendMail } = require('../middleware/email-sender');

const LoginHandler = async (req, res) => {
    let { email, password } = req.body;
    if (!email || !password) {
        return res.json({ status: false, message: "Email Or Password is required" });
    }
    try {
        let user = await User.findOne({ email: email });
        if (!user) {
            return res.json({ status: false, message: "Email not Register Please Signup First" });
        }
        if(user.verified === false){
            return res.json({ status: false, message: "Please Verified Your Account! or Create Another one" });
        }
        if (email === user.email && password === user.password) {
            req.session.auth = true;
            req.session.email = user.email;
            res.cookie("email", user.email, { maxAge: 300000 });
            res.cookie("id", user.id, { maxAge: 300000 });
            req.session.save();
            return res.json({ status: true, message: "Login Successfully" });
        }
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

const signUpHandler = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const userName = req.body.userName;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const phoneNo = req.body.phoneNo;
    const verificationCode = crypto.randomBytes(20).toString('hex');

    let user = await User.findOne({ email });

    if (user) {
        return res.status(200).json({
            success: false,
            message:
                'Email is already registered. Did you forget the password. Try resetting it.',
        });
    }

    if (password !== confirmPassword) {
        return res.json({ status: false, message: 'Passwords & Confirmed Password do not match' });
    }
    if (phoneNo.length < 10) {
        return res.json({ status: false, message: 'Phone number must be 10 characters long' });
    }
    try {
        const user = await User.create({ name, email, userName, password, phoneNo, verificationCode });

        let html = `
        <div>
            <h1>Hello, ${user.name}</h1>
            <p>Please click the following link to verify your account</p>
            <a href="${process.env.DOMAIN}/onboarding/verify/${user.verificationCode}">Verify Now</a>
        </div>`;

        console.log(`${process.env.DOMAIN}/onboarding/verify/${user.verificationCode}`, 'verify link');

        await sendMail(
            user.email,
            'Verify Account',
            'Please verify Your Account.',
            html
        );

        return res.json({ status: true, data: user });
    }
    catch (e) {
        return res.json({ status: false, message: e.message });
    }
}

const verifyUser = async (req, res) => {
    let { verificationCode } = req.params;
    let user = await User.findOne({ verificationCode });

    if (!user) {
        return res.status(401).json({
            message: 'Unauthorized access. Invalid verification code',
            success: false,
        });
    }

    user.verified = true;
    user.verificationCode = undefined;
    await user.save();

    return res.status(200).json({
        success: true,
        message: 'Hurray! your account is successfully verified.',
    });
};

const logout = (req, res) => {
    res.cookie('connect.sid', '', { expires: new Date(1), path: '/' });
    res.clearCookie('connect.sid', { path: '/' });
    res.redirect('/');
}

module.exports = { LoginHandler, signUpHandler, logout , verifyUser};