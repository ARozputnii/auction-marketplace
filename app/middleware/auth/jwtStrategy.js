import JWT from 'passport-jwt';
import passport from 'passport';

import { JWT_SECRET } from '../../../config/dotenv.js';

const JWTstrategy = JWT.Strategy;
const { ExtractJwt } = JWT;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = JWT_SECRET;

passport.use(
  new JWTstrategy(opts, async (token, done) => {
    try {
      return done(null, token.user);
    } catch (error) {
      done(error);
    }
  }),
);
