import mongoose from 'mongoose';
import { Movie, User } from '.';

namespace review {
	export interface ReviewInfo {
		writer: User.UserInfo;
		movie: Movie.MovieInfo;
		title: string;
		content: string;
	}
}

export default review;
