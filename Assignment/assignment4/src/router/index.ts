import express from 'express';
import user from './user';
import post from './post';

const router = express.Router();

router.use('/user', user);
router.use('/post', post);

export default router;
