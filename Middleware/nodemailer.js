const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');
 
// SendGrid api key 
const options = {
    auth: {
        api_key: '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'
    }
}

const mailer = nodemailer.createTransport(sendGridTransport(options));



module.exports = {options, mailer}