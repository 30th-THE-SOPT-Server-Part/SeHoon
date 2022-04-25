import mongoose from 'mongoose';
import { Post } from '../interface';

const PostSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
});

export default mongoose.model<Post.PostInfo & mongoose.Document>('Post', PostSchema);
