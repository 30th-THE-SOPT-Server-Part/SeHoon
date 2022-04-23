import express from 'express';
import user from './user';
import blog from './blog';
import like from './like';

const router = express.Router();

router.use('/user', user);
router.use('/blog', blog);
router.use('/like', like);

export default router;
