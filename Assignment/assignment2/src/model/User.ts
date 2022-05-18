import mongoose from 'mongoose';
import { User } from '../interface';

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	age: {
		type: String,
		required: true,
	},
	school: {
		name: { type: String },
		major: { type: String },
	},
});

export default mongoose.model<User.UserInfo & mongoose.Document>('User', UserSchema);
