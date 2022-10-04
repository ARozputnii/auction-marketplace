import RegistrationService from '../../../services/auth/RegistrationService.js';

class RegistrationsController {
  async create(req, res) {
    try {
      const user = await RegistrationService.create(req.body);
      res.status(201).json({ user });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default new RegistrationsController();
