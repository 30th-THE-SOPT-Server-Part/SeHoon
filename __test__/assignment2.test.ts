import app from '../Assignment/assignment2/src';
import request from 'supertest';

describe('[2주차 과제]', () => {
	it('[GET] /api/user', async () => {
		const response = await request(app).get('/api/user');

		expect(response.statusCode).toBe(200);
	});
});
