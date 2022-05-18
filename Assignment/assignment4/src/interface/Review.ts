import mongoose from 'mongoose';

namespace review {
	export interface ReviewInfo {
		writer: mongoose.Types.ObjectId;
		movie: mongoose.Types.ObjectId;
		title: string;
		content: string;
	}
}

export default review;
