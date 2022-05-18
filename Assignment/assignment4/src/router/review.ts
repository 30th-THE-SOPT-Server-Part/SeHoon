import express from 'express';
import { body } from 'express-validator/check';
import { reviewController } from '../controller';

const router = express.Router();

router.post(
	'/movies/:movieId',
	[body('title').notEmpty(), body('writer').notEmpty(), body('content').notEmpty()],
	reviewController.createReview,
);

router.get('/movies/:movieId', reviewController.getReviews);

export default router;
