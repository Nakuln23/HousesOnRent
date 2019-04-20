const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');
 
// SendGrid api key 
const options = {
    auth: {
        api_key: process.env.SENDGRID_API_KEY
    }
}

const mailer = nodemailer.createTransport(sendGridTransport(options));



module.exports = {options, mailer}