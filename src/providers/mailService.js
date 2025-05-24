import { welcomeUserTemplate } from '../templates/welcomeUser';
import { MailAdapter } from './adapters/mailAdapter';

class MailService extends MailAdapter {
  async sendOptToUser({ email, otp, username = '' }) {
    const subject = 'Welcome to our service';
    const template = await this.renderHtml(welcomeUserTemplate, {
      code: otp,
      name: username,
    });

    await this.sendMail({
      receiveEmail: email,
      subject,
      html: template,
    });
  }
}

export const mailService = new MailService();
