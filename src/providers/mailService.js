import { MailAdapter } from './adapters/mailAdapter';

class MailService extends MailAdapter {
  async sendOptToUser(otp, user_id) {}
}

export const mailService = new MailService();
