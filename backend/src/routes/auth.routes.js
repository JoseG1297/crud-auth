import { Router } from 'express';

import { register, login, logOut , profile} from '../controllers/auth.controller.js';

import { authRequired} from '../middlewares/validateToken.js'


const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logOut);
router.post('/profile', authRequired, profile)

export default router;