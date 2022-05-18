import mongoose from 'mongoose';
import { Movie } from '../interface';

const MovieSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	director: {
		type: String,
		required: true,
	},
	startDate: {
		type: Date,
	},
	thumbnail: {
		type: String,
	},
	story: {
		type: String,
	},
});

export default mongoose.model<Movie.MovieInfo & mongoose.Document>('Movie', MovieSchema);
