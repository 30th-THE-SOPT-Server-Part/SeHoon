import File from '../model/File';
import { fileDTO } from '../DTO';

/**
 * @파일_생성
 */
const createFile = async (url: string, fileName: string) => {
	try {
		const file = new File({ url, fileName });

		await file.save();

		const data: fileDTO.FileResponseDTO = {
			id: file._id,
			url,
		};

		return data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

/**
 * @여러_파일_생성
 */
const createFiles = async (fileCreateDTO: fileDTO.FileCreateDTO[]) => {
	try {
		const data: fileDTO.FileResponseDTO[] = await Promise.all(
			fileCreateDTO.map(async (image) => {
				const file = new File({
					url: image.location,
					fileName: image.originalname,
				});

				await file.save();

				return {
					id: file._id,
					url: file.url,
				};
			}),
		);

		return data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

const fileService = {
	createFile,
	createFiles,
};

export default fileService;
