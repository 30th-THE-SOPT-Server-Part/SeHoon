import config from '../config';
import mongoose from 'mongoose';
import Movie from '../model/Movie';
import Review from '../model/Review';

const connectDB = async () => {
	try {
		const options = {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
		};

		await mongoose.connect(config.mongoURI!);

		mongoose.set('autoCreate', true);
		mongoose.set('autoIndex', true);

		Movie.createCollection()
			.then((collection) => {
				console.log(`Movie collection is created !`);
			})
			.catch((collection) => {
				console.log(`Movie collection error!`);
			});

		Review.createCollection()
			.then((collection) => {
				console.log(`Review collection is created !`);
			})
			.catch((collection) => {
				console.log(`Review collection error!`);
			});

		console.log('Mongoose Connected ...');
	} catch (err: any) {
		console.error(err.message);
		process.exit(1);
	}
};

export default connectDB;
