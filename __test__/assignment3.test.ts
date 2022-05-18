import app from '../Assignment/assignment2/src';
import express from 'express';
import request from 'supertest';
import { postDTO } from '../Assignment/assignment2/src/DTO';
import { rm, sc } from '../Assignment/assignment2/src/constant';
import { postService } from '../Assignment/assignment2/src/service';

let server = express();

beforeAll(() => {
	server = app;
});

describe('[3주차 과제]', () => {
	it('✨ 게시글 API 테스트', async () => {
		const post: postDTO.PostCreateDTO = {
			title: '테스트',
			content: '테스트 게시글 내용',
		};

		const res = await request(app).post('/api/blog').send(post);

		expect(res.body.status).toBe(sc.CREATED);
		expect(res.body.message).toBe(rm.CREATE_POST_SUCCESS);

		const postId = String(res.body.data._id);

		const postForUpdate: postDTO.PostUpdateDTO = {
			title: '안녕하세요.',
		};

		await postService.updatePost(postId, postForUpdate);
		const updatedPost = await postService.findPostById(postId);

		expect(updatedPost?.title).toBe('안녕하세요.');
		expect(updatedPost?.content).toBe('테스트 게시글 내용');

		await request(app).delete(`/api/blog/${postId}`);
	});
});
