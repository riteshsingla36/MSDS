const router = require("express").Router();
const sendEmailController = require('../controllers/email.controller');

router.post('/sendemail', sendEmailController.sendEmail);

module.exports = router;