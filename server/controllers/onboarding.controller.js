const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const {sendMail} = require('../middleware/email-sender');

const LoginHandler = async (req, res) => {
    const { email, password } = req.body;
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
        if (email === user.email && bcrypt.compare(password , user.password)) {
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
    let password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const phoneNo = req.body.phoneNo;
    const verificationCode = crypto.randomBytes(20).toString('hex');

    if (password !== confirmPassword) {
        return res.json({ status: false, message: 'Passwords & Confirmed Password do not match' });
    }

    let user = await User.findOne({ email });

    if (phoneNo.length < 10) {
        return res.json({ status: false, message: 'Phone number must be 10 characters long' });
    }

    if (user) {
        return res.status(200).json({
            success: false,
            message:
                'Email is already registered. Did you forget the password. Try resetting it.',
        });
    }


    password = await bcrypt.hash(password, 10);
    try {
        const user = await User.create({ name, email, userName, password, phoneNo, verificationCode });

        let html = `
        <div>
            <h1>Hello, ${user.name}</h1>
            <p>Please click the following link to verify your account</p>
            <a href="${process.env.DOMAIN}/onboarding/verify/${user.verificationCode}">Verify Now</a>
        </div>`;
        
        await sendMail(
            user.email,
            'Verify Account',
            'Please verify Your Account.',
            html
        );

        return res.json({ status: true, message: 'Mail Sent Successfully, Please Verify Your Account' });
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

module.exports = { LoginHandler, signUpHandler, logout , verifyUser, resetPasswordHandler};
