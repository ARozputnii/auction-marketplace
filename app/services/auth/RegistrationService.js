import User from '../../models/User.js';

class RegistrationService {
  async create(params) {
    return await User.create({
      email: params.email,
      phone: params.phone,
      first_name: params.first_name,
      last_name: params.last_name,
      birth_day: params.birth_day,
      password: params.password,
    });
  }
}

export default new RegistrationService();
