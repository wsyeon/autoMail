require("dotenv").config();

const nodemailer = require("nodemailer"); // 모듈 import

const email = {
  service: "gmail",
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.EMAIL_PWD,
  },
};

const message = {
  from: process.env.EMAIL_SENDER,
  to: process.env.EMAIL_SENDER,
  subject: "Test",
  text: "TEST",
};

const autoMail = (mail) =>
  nodemailer.createTransport(email).sendMail(mail, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

autoMail(message);
