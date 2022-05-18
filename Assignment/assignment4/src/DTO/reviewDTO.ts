import mongoose from 'mongoose';
import { Movie, User } from '../interface';

namespace reviewDTO {
	export interface ReviewCreateDTO {
		writer: mongoose.Types.ObjectId;
		title: string;
		content: string;
	}

	export interface ReviewUpdateDTO {
		title?: string;
		content?: string;
	}

	export interface ReviewResponseDTO {
		writer: string;
		movie: Movie.MovieInfo;
		title: string;
		content: string;
	}
}

export default reviewDTO;
