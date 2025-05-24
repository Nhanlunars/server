import { forgotPasswordTemplate } from '../templates/forgotPassword';
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

  async forgotPassword({ email, otp }) {
    const subject = 'Request to forgot password';
    const template = await this.renderHtml(forgotPasswordTemplate, {
      code: otp,
      email,
    });

    await this.sendMail({
      receiveEmail: email,
      subject,
      html: template,
    });
  }
}

export const mailService = new MailService();
