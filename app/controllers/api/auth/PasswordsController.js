import PasswordService from '../../../services/auth/PasswordService.js';

class PasswordsController {
  async create(req, res) {
    try {
      const { email } = req.body;
      if (!email) {
        res.status(400).json({ message: 'Incorrect email' });
      }

      const result = await PasswordService.sendInstruction(email);

      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new PasswordsController();
