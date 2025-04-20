require("dotenv").config();

const nodemailer = require("nodemailer");
const date = new Date();

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
  text: `현재 시간 ${date.getHours()}시-TEST`,
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
