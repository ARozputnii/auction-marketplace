import User from '../../models/User.js';
import UserMailer from '../../mailers/UserMailer.js';

class PasswordService {
  SUBJECT = 'Instructions for resetting the password';

  TEXT = 'text';

  async sendInstruction(email) {
    const user = await User.findOne({ email });

    if (user) {
      const mailer = new UserMailer(user.email, this.SUBJECT, this.TEXT);
      await mailer.send();
    } else {

    }
    return user;
  }
}

export default new PasswordService();
