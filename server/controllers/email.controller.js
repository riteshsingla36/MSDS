const { sendMail } = require('../middleware/email-sender');
const dotenv = require('dotenv');

dotenv.config('../.env');

const sendEmail = async (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const subject = req.body.subject;
  const query = req.body.query;
  let html = `<div>
    <h1>Hello</h1>
        <p>Your have a new Query from ${email}. Related to <b>${subject}<b/> <br/>QUERY: ${query}</p>
    </div>`;
  try {
    await sendMail(process.env.TO_EMAIL, subject, "Your Have a New Query!", html);
    res.json({status: true, data: 'Mail Sent SuccessFully'});
  } catch (e) {
    res.json({status: false, message: e.message});
  }
};

module.exports = {sendEmail};