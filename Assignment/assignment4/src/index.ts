import express, { Request, Response, NextFunction } from 'express';
import connectDB from './loader/db';
import dotenv from 'dotenv';
import router from './router';
import path from 'path';

const app = express();

dotenv.config();

void connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', router);

interface ErrorType {
	message: string;
	status: number;
}

app.use(function (err: ErrorType, req: Request, res: Response, next: NextFunction) {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'production' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

export default app;
