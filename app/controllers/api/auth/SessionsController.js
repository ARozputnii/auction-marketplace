import passport from 'passport';
import jwt from 'jsonwebtoken';
import '../../../middleware/auth/login.js';
import { JWT_SECRET } from '../../../../config/dotenv.js';

class SessionsController {
  async create(req, res, next) {
    passport.authenticate(
      'login',
      async (err, user, info) => {
        try {
          if (err || !user) {
            res.status(422).json(info || err);
            return next(err);
          }

          req.login(
            user,
            { session: false },
            async (error) => {
              if (error) {
                res.status(422).json(error);
                return next(error);
              }

              const body = { _id: user._id, email: user.email };
              const token = jwt.sign({ user: body }, JWT_SECRET);

              res.status(200).json({ token });
            },
          );
        } catch (error) {
          res.status(422).json(error);
          return next(error);
        }
      },
    )(req, res, next);
  }
}

export default new SessionsController();
