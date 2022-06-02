import mongoose from 'mongoose';
import { Movie } from '../interface';

const MovieSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		director: {
			type: String,
			required: true,
		},
		openingDate: {
			type: Date,
		},
		thumbnail: {
			type: String,
		},
		content: {
			type: String,
		},
	},
	{ timestamps: true },
);

export default mongoose.model<Movie.MovieInfo & mongoose.Document>('Movie', MovieSchema);
