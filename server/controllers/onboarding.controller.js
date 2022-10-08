const express = require('express');
const User = require('../models/user.model');
const cookie = require("cookie-parser");

const LoginHandler = async (req, res) => {
    const {email,password} = req.body;
    if(!email || !password) {
        return res.json({status: false, message: "Email Or Password is required"});
    }
    try{
        const user = await User.findOne({email: email});
        req.session.user = user;
        return res.json({status: true, message: "Login Successfully"});
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
    const gender = req.body.gender;
    const phoneNo = req.body.phoneNo;
    //const profileImage = req.file.path;

    if(password.length < 8){
        return res.json({status: false, message: "Password too short"});
    }
    if(password !== confirmPassword){
        return res.json({status: false, message: 'Passwords & Confirmed Password do not match'});
    }
    if(phoneNo.length <10) {
        return res.json({status: false, message: 'Phone number must be 10 characters long'});
    }
    try {
        const user = await User.create({name, email, userName, password, gender, phoneNo});
        return res.json({status: true, data: user});
    }
    catch(e) {
        return res.json({status: false, message: e.message});
    }
}


module.exports = {LoginHandler, signUpHandler};