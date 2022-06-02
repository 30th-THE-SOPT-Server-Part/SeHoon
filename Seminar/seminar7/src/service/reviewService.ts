import Review from '../model/Review';
import { commonDTO, reviewDTO } from '../DTO';

const createReview = async (
	movieId: string,
	reviewCreateDTO: reviewDTO.ReviewCreateDTO,
): Promise<commonDTO.PostBaseResponseDTO> => {
	try {
		const review = new Review({
			title: reviewCreateDTO.title,
			content: reviewCreateDTO.content,
			writer: reviewCreateDTO.writer,
			movie: movieId,
		});

		await review.save();

		const data = {
			_id: review._id,
		};

		return data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

const updateReview = async (reviewId: string, reviewUpdateDTO: reviewDTO.ReviewUpdateDTO) => {
	try {
		await Review.findByIdAndUpdate(reviewId, reviewUpdateDTO);
	} catch (error) {
		console.log(error);
		throw error;
	}
};

const getReviewsByMovieId = async (movieId: string): Promise<reviewDTO.ReviewResponseDTO[]> => {
	try {
		const reviews = await Review.find({
			movie: movieId,
		})
			.populate('writer', 'name')
			.populate('movie');

		const data = reviews.map((review) => {
			const result = {
				writer: review.writer.name,
				movie: review.movie,
				title: review.title,
				content: review.content,
			};

			return result;
		});

		return data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

const deleteReview = async (reviewId: string) => {
	try {
		await Review.findByIdAndDelete(reviewId);
	} catch (error) {
		console.log(error);
		throw error;
	}
};

const reviewService = {
	createReview,
	updateReview,
	getReviewsByMovieId,
	deleteReview,
};

export default reviewService;
