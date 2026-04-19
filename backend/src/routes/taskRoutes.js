import {Router} from 'express';
import {
    getAllTasksController,
    createTaskController,
    updateTaskController,
    deleteTaskController
}

from "../controllers/taskController.js";

const router = Router();

router.get('/tasks', getAllTasksController);
router.post('/tasks', createTaskController);
router.patch('/tasks/:id', updateTaskController);
router.delete("/tasks:id", deleteTaskController)

export default router;