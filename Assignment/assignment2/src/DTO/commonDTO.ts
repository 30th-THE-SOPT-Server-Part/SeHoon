import mongoose from 'mongoose';

namespace commonDTO {
	export interface PostBaseResponseDTO {
		_id: mongoose.Schema.Types.ObjectId;
	}
}

export default commonDTO;
