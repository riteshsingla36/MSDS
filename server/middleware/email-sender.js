const sgMail = require('@sendgrid/mail');
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API);

const sendMail = async (email, subject, text, html) => {
    const msg = {
      html,
      text,
      subject,
      to: email,
      from: process.env.HOST_EMAIL,
    };
    await sgMail.send(msg);
};

module.exports = {sendMail};
