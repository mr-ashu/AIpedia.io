const nodemailer = require('nodemailer');
let userName_email = process.env.USERNAME_EMAIL;
let emailpassword = process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: userName_email,
        pass: emailpassword
    }
});

async function sendMailer(to, otp){
    let info = await transporter.sendMail({
        from: '"aniket", aniketchhetri6@gmail.com', // sender address
        to: to, // list of receivers
        subject: "Email Verification ✔", // Subject line
        html: otp, // plain text body
        // html // html body
      });
}

module.exports = {sendMailer}