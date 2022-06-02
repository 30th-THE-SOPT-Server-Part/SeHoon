import mongoose from 'mongoose';

namespace fileDTO {
	export interface FileResponseDTO {
		id: mongoose.Types.ObjectId;
		url: string;
	}

	export interface FileCreateDTO {
		location: string;
		originalname: string;
	}
}

export default fileDTO;
