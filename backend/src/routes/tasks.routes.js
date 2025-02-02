import { Router } from 'express';

import { authRequired} from '../middlewares/validateToken.js'
import { getTasks, getTaskById, createTask, updateTask, deleteTask } from '../controllers/tasks.controller.js';

import { validateSchema } from '../middlewares/validators-schema.js';
import { taskSchema } from '../schemas/task.schema.js';

const router = Router();

router.get('/tasks', authRequired, getTasks)
router.get('/tasks/:id', authRequired, getTaskById)
router.post('/tasks', authRequired, validateSchema(taskSchema), createTask)
router.delete('/tasks/:id', authRequired, deleteTask)
router.put('/tasks/:id', authRequired, updateTask)

export default router;