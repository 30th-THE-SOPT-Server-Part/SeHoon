import mongoose from 'mongoose';
import { File } from '../interface';

const FileSchema = new mongoose.Schema(
	{
		url: {
			type: String,
			required: true,
		},
		fileName: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
);

export default mongoose.model<File.FileInfo & mongoose.Document>('File', FileSchema);
