require("dotenv").config();

const nodemailer = require("nodemailer");
const date = new Date();
const dataTEXT = require("./text.json");

// const TEXT = dataTEXT[date.getMonth() + 1][date.getDate()];
const TEXT = dataTEXT[4][28];

const email = {
  service: "gmail",
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.EMAIL_PWD,
  },
};

const message = {
  from: process.env.EMAIL_SENDER,
  to: "sywon2005@gmail.com",
  subject: TEXT.subject,
  text: TEXT.text,
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
