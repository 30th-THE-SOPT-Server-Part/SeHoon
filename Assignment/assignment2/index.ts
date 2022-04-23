import app from './src';
import dotenv from 'dotenv';

dotenv.config();

app
	.listen(process.env.PORT, () => {
		console.log(`
    ################################################
          🛡️  Server listening on port: ${process.env.PORT} 🛡️
    ################################################
  `);
	})
	.on('error', (err) => {
		console.error(err);
		process.exit(1);
	});
