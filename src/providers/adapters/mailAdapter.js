import nodemailer from 'nodemailer';
import { configurations } from '../../config/configuration';
import handlebars from 'handlebars';

const { port, password, host, from, user } = configurations.mailer;

export class MailAdapter {
  async renderHtml(template, data) {
    return handlebars.compile(template)(data);
  }
  async initTransport() {
    return nodemailer.createTransport({
      host,
      service: 'gmail',
      port: +port,
      secure: false,
      auth: {
        user: user,
        pass: password,
      },
    });
  }

  async sendMail({ receiveEmail, subject, html }) {
    const mailOptions = {
      from,
      to: receiveEmail,
      subject,
      html,
    };
    try {
      const transporter = await this.initTransport();
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.log('🚀 MailService ~ sendMail', error);
    }
  }
}
