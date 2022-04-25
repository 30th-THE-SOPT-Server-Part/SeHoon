import app from '../Assignment/assignment2/src';
import request from 'supertest';
import * as DB from './db.test';

beforeAll(async () => {
	await DB.connect();
});

afterEach(async () => {
	await DB.clearDatabase();
});

afterAll(async () => {
	await DB.closeDatabase();
});

describe('[3주차 과제]', () => {
	it('[POST] /api/blog', async () => {
		const response = await request(app).get('/api/user');

		expect(response.statusCode).toBe(200);
	});

	it('[POST] /api/blog', async () => {
		const response = await request(app).get('/api/user');

		expect(response.statusCode).toBe(200);
	});

	it('[POST] /api/blog', async () => {
		const response = await request(app).get('/api/user');

		expect(response.statusCode).toBe(200);
	});

	it('[POST] /api/blog', async () => {
		const response = await request(app).get('/api/user');

		expect(response.statusCode).toBe(200);
	});
});
