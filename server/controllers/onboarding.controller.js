const express = require('express');
const User = require('../models/user.model');

const LoginHandler = async (req, res) => {
    const {email,password} = req.body;
    if(!email || !password) {
        return res.json({status: false, message: "Email Or Password is required"});
    }
    try{
        const user = await User.findOne({email: email});
        
        if(!user){
            return res.json({status: false, message: "Email not Register Please Signup First"});
        }
        if(email === user.email && password === user.password){
            req.session.auth = true;
            req.session.email = user.email;
            res.cookie("email", user.email, { maxAge: 300000 });
            res.cookie("id", user.id, { maxAge: 300000 });
            req.session.save();
            return res.json({status: true, message: "Login Successfully"});
        }
    }catch(err){
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

    if(password !== confirmPassword){
        return res.json({status: false, message: 'Passwords & Confirmed Password do not match'});
    }
    if(phoneNo.length < 10) {
        return res.json({status: false, message: 'Phone number must be 10 characters long'});
    }
    try {
        const user = await User.create({name, email, userName, password, phoneNo});
        return res.json({status: true, data: user});
    }
    catch(e) {
        return res.json({status: false, message: e.message});
    }
}

const logout = (req, res) => {
    res.cookie('connect.sid', '', {expires: new Date(1), path: '/'});
    res.clearCookie('connect.sid', {path: '/'});
    res.redirect('/');
}

module.exports = {LoginHandler, signUpHandler, logout};