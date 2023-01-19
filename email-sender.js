var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'chadimola68@gmail.com',
      pass: 'anseznugslihevyg'
    }
  });

var mailOptions = {
  from: 'dejuan.little@ethereal.email',
  to: 'bensalemabdelhafidh@gmail.com',
  subject: 'Sending Email using Node.js By Chadi Mola',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});