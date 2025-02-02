import { Router } from 'express';

import { authRequired} from '../middlewares/validateToken.js'


const router = Router();

router.get('/tasks', authRequired)

export default router;