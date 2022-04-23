import config from '../config';
import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		const options = {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
		};

		await mongoose.connect(config.mongoURI);

		mongoose.set('autoCreate', true);
		mongoose.set('autoIndex', true);

		console.log('Mongoose Connected ...');
	} catch (err: any) {
		console.error(err.message);
		process.exit(1);
	}
};

export default connectDB;
