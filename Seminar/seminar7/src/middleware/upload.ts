import multer from 'multer';
import multerS3 from 'multer-s3';
import config from '../config';
import s3 from '../config/s3Config';

const upload = multer({
	storage: multerS3({
		s3,
		bucket: config.bucketName,
		contentType: multerS3.AUTO_CONTENT_TYPE,
		acl: 'public-read',
		key: (req: Express.Request, file: Express.MulterS3.File, cb) => {
			cb(null, `${Date.now()}_${file.originalname}`);
		},
	}),
});

export default upload;
