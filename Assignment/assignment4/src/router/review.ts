import express from 'express';
import { check } from 'express-validator';
import { reviewController } from '../controller';

const router = express.Router();

router.post(
	'/movies/:movieId',
	[check('title').notEmpty(), check('writer').notEmpty(), check('content').notEmpty()],
	reviewController.createReview,
);

router.put('/:reviewId', reviewController.updateReview);
router.get('/movies/:movieId', reviewController.getReviews);
router.delete('/:reviewId', reviewController.deleteReview);

export default router;
