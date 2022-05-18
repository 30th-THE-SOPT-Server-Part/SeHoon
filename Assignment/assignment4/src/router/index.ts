import express from 'express';
import user from './user';
import post from './post';
import review from './review';

const router = express.Router();

router.use('/user', user);
router.use('/post', post);
router.use('/review', review);

export default router;
