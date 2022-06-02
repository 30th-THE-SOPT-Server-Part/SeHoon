import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();

if (envFound.error) {
	throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
	/**
	 * @Port
	 */
	port: parseInt(process.env.PORT as string, 10),
	/**
	 * @MongoDB_URI
	 */
	mongoURI: process.env.MONGODB_URI as string,
	/**
	 * @AWS_S3
	 */
	s3AccessKey: process.env.S3_ACCESS_KEY as string,
	s3SecretKey: process.env.S3_SECRET_KEY as string,
	bucketName: process.env.BUCKET_NAME as string,
};
