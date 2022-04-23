import express from 'express';
import router from './router';

const app = express();

app.use(express.json());

app.use('/api', router);

app.listen('8000', () => {
	console.log(`
        #############################################
            🛡️ Server listening on port: 8000 🛡️
        #############################################
    `);
});
