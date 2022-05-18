import express from 'express';
import { userController } from '../controller';
import { check } from 'express-validator';

const router = express.Router();

router.post(
	'/',
	[
		check('name', '이름을 입력해주세요.').notEmpty().isString(),
		check('phone', '전화번호를 입력해주세요.').notEmpty(),
		check('email', '이메일을 입력해주세요.').notEmpty().isEmail(),
	],
	userController.createUser,
);
router.put('/:userId', userController.updateUser);
router.get('/:userId', userController.findUser);
router.delete('/:userId', userController.deleteUser);

export default router;
