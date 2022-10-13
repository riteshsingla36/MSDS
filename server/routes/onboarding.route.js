const router = require("express").Router();
const OnBoarding = require("../controllers/onboarding.controller");

router.post('/login', OnBoarding.LoginHandler);

router.post('/register', OnBoarding.signUpHandler);

router.post('/reset-password', OnBoarding.resetPasswordHandler);

router.post('/reset-now', OnBoarding.resetPasswordNow);

router.post('/verify', OnBoarding.verifyUser);

router.get('/logout', OnBoarding.logout);

module.exports = router;