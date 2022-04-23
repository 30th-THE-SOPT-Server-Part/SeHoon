import express from 'express';
import { userController } from '../controller';

const router = express.Router();

/**
 * @회원가입
 */
router.post('/', userController.createUser);

export default router;
