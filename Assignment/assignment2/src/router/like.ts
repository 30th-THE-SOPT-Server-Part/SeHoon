import express, { Request, Response } from 'express';
import { success } from '../library/response';
import { sc, rm } from '../constant';

const router = express.Router();

/**
 * @조회
 */
router.get('/', (req: Request, res: Response) => {
	return res.status(sc.OK).send(success(sc.OK, rm.READ_USER_SUCCESS));
});

export default router;
