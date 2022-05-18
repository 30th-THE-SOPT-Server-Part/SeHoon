import { sc, rm } from '../constant';
import { Request, Response } from 'express';
import { response } from '../library';
import { validationResult } from 'express-validator';
import { reviewService } from '../service';
import { commonDTO, reviewDTO } from '../DTO';

/**
 *  @리뷰_생성
 *  @route POST /review/movies/:movieId
 *  @access public
 */
const createReview = async (req: Request, res: Response) => {
	const validatedError = validationResult(req);

	if (!validatedError.isEmpty()) {
		return res.status(sc.BAD_REQUEST).send(response.fail(sc.BAD_REQUEST, rm.NULL_VALUE));
	}

	const reviewCreateDTO: reviewDTO.ReviewCreateDTO = req.body;
	const { movieId } = req.params;

	try {
		const data: commonDTO.PostBaseResponseDTO = await reviewService.createReview(movieId, reviewCreateDTO);

		res.status(sc.CREATED).send(response.success(sc.CREATED, rm.CREATE_POST_SUCCESS, data));
	} catch (error) {
		console.error(error.message);
		res.status(sc.INTERNAL_SERVER_ERROR).send(response.fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
	}
};

/**
 *  @리뷰_업데이트
 *  @route PUT /review/:reviewId
 *  @access public
 */
const updateReview = async (req: Request, res: Response): Promise<void> => {
	const userUpdateDTO: reviewDTO.ReviewUpdateDTO = req.body;
	const { reviewId } = req.params;

	try {
		await reviewService.updateReview(reviewId, userUpdateDTO);

		res.status(sc.OK).send(response.success(sc.OK, rm.UPDATE_REVIEW_SUCCESS));
	} catch (error: any) {
		console.error(error.message);
		res.send(sc.INTERNAL_SERVER_ERROR).send(response.fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
	}
};

/**
 *  @리뷰_조회
 *  @route GET /review/movies/:movieId
 *  @access public
 */
const getReviews = async (req: Request, res: Response): Promise<void> => {
	const { movieId } = req.params;

	try {
		const reviews = await reviewService.getReviewsByMovieId(movieId);
		if (!reviews) res.status(sc.BAD_REQUEST).send(response.fail(sc.BAD_REQUEST, rm.NO_CONTENT));

		res.status(sc.OK).send(response.success(sc.OK, rm.READ_ALL_REVIEWS_SUCCESS, reviews));
	} catch (error: any) {
		console.error(error.message);
		res.send(sc.INTERNAL_SERVER_ERROR).send(response.fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
	}
};

/**
 *  @리뷰_삭제
 *  @route DELETE /review/:reviewId
 *  @access public
 */
const deleteReview = async (req: Request, res: Response): Promise<void> => {
	const { reviewId } = req.params;

	try {
		await reviewService.deleteReview(reviewId);
		res.status(sc.OK).send(response.success(sc.OK, rm.DELETE_REVIEW_SUCCESS));
	} catch (error: any) {
		console.error(error.message);
		res.send(sc.INTERNAL_SERVER_ERROR).send(response.fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
	}
};

const reviewController = {
	createReview,
	updateReview,
	getReviews,
	deleteReview,
};

export default reviewController;
