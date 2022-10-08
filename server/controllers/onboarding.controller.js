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
            res.setHeader('Content-Type', 'text/html');
            res.json({status: true, message: "Login Successfully"});
            alert('Login Successfully');
            nav('/client/src/pages/home/Home.jsx');
        }else{
            return res.json({status: false, message: "Email or Password is incorrect"});
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
    const gender = req.body.gender;
    const phoneNo = req.body.phoneNo;
    //const profileImage = req.file.path;

    if(password.length < 8){
        res.json({status: false, message: "Password too short"});
        return ;
    }
    if(password !== confirmPassword){
        res.json({status: false, message: 'Passwords & Confirmed Password do not match'});
        return;
    }
    if(phoneNo.length <10) {
        res.json({status: false, message: 'Phone number must be 10 characters long'});
        return;
    }
    try {
        const user = await User.create({name, email, userName, password, gender, phoneNo});
        res.json({status: true, data: user});
    }
    catch(e) {
        res.json({status: false, message: e.message});
    }
}


module.exports = {LoginHandler, signUpHandler};