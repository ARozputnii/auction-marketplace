import { Router } from 'express';

import passport from 'passport';
import SessionsController from '../app/controllers/api/auth/SessionsController.js';
import PasswordsController from '../app/controllers/api/auth/PasswordsController.js';
import RegistrationsController from '../app/controllers/api/auth/RegistrationsController.js';
import '../app/middleware/auth/jwtStrategy.js';

const router = new Router();

router.post('/sign_in', SessionsController.create);
router.post('/sign_up', RegistrationsController.create);
router.post('/password', PasswordsController.create);
// router.post('/password', passport.authenticate('jwt', { session: false }), PasswordsController.create);

export default router;
