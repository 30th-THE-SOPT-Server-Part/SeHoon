import express from 'express';
import { userController } from '../controller';

const router = express.Router();

router.post('/', userController.createUser);
router.put('/:userId', userController.updateUser);
router.get('/:userId', userController.findUser);
router.delete('/:userId', userController.deleteUser);

export default router;
