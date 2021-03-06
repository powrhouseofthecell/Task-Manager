const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = process.env.SG;

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
   sgMail.send({
      to: email,
      from: process.env.MAIL_FROM,
      subject: 'Thanks for joining in!',
      text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
   });
};

const sendCancelationEmail = (email, name) => {
   sgMail.send({
      to: email,
      from: process.env.MAIL_FROM,
      subject: 'Sorry to see you go!',
      text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
   });
};

module.exports = {
   sendWelcomeEmail,
   sendCancelationEmail,
};
