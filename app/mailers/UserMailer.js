import nodemailer from 'nodemailer';

class UserMailer {
  constructor(to, subject, text) {
    this.to = to;
    this.subject = subject;
    this.text = text;
  }

  async send() {
    await this.transporter.sendMail({
      from: 'test@example.com',
      to: this.to,
      subject: this.subject,
      text: this.text,
      html: '<p>this.text</p>',
    });
  }

  transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 465,
    secure: true,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  });
}

export default UserMailer;
