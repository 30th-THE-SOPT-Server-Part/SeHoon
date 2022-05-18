import mongoose from 'mongoose';
import { Review } from '../interface';

const ReviewSchema = new mongoose.Schema({
	writer: {
		type: mongoose.Types.ObjectId,
		required: true,
		ref: 'User',
	},
	movie: {
		type: mongoose.Types.ObjectId,
		required: true,
		ref: 'Movie',
	},
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
	},
});

export default mongoose.model<Review.ReviewInfo & mongoose.Document>('Review', ReviewSchema);
