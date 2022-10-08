const router = require("express").Router();
const OnBoarding = require("../controllers/onboarding.controller");

router.post('/login', OnBoarding.LoginHandler);

router.post('/register', OnBoarding.signUpHandler);

module.exports = router;