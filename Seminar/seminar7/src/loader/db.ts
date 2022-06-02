import mongoose from 'mongoose';
import config from '../config';
import Movie from '../model/Movie';
import Review from '../model/Review';

const connectDB = async () => {
	try {
		await mongoose.connect(config.mongoURI);

		mongoose.set('autoCreate', true);

		console.log('Mongoose Connected ...');

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
	} catch (err: any) {
		console.error(err.message);
		process.exit(1);
	}
};

export default connectDB;
