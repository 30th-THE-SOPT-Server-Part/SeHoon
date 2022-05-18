/* eslint-disable @typescript-eslint/restrict-template-expressions */
import app from './src';
import dotenv from 'dotenv';

dotenv.config();

app
	.listen(process.env.TEST, () => {
		console.log(`
    ################################################
          🛡️  Server listening on port: ${process.env.TEST as string} 🛡️
    ################################################
  `);
	})
	.on('error', (err) => {
		console.error(err);
		process.exit(1);
	});
