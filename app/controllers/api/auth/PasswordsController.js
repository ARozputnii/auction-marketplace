import RegistrationService from '../../../services/auth/RegistrationService.js';

class PasswordsController {
  async create(req, res) {
    try {
      res.status(201).json({
        message: 'Sign-up successful',
        user: req.user,
        token: req.headers.authorization,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new PasswordsController();
