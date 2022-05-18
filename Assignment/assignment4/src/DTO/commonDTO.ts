import mongoose from 'mongoose';

namespace commonDTO {
	export interface PostBaseResponseDTO {
		_id: mongoose.Schema.Types.ObjectId;
	}
	export interface ErrorType {
		message: string | null | unknown;
		status: number | null | unknown;
	}
}

export default commonDTO;
