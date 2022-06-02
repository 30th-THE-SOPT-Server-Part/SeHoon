import express from 'express';
import user from './user';
import post from './post';
import review from './review';
import movie from './movie';
import file from './file';

const router = express.Router();

router.use('/user', user);
router.use('/post', post);
router.use('/review', review);
router.use('/movie', movie);
router.use('/file', file);

export default router;
