import { MailAdapter } from './adapters/mailAdapter';

class MailService extends MailAdapter {
  async sendOptToUser(otp, email) {
    const subject = 'Welcome to our service';
    const template = `
      <h1>Welcome to our service</h1>
      <p>Your OTP code is: ${otp}</p>
    `;

    await this.sendMail({
      receiveEmail: email,
      subject,
      html: template,
    });
  }
}

export const mailService = new MailService();
