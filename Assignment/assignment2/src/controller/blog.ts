import { userDTO, commonDTO, postDTO } from '../DTO';
import { Request, Response } from 'express';
import { response } from '../library';
import { postService } from '../service';
import { sc, rm } from '../constant';

/**
 *  @게시글_생성
 *  @route POST /blog
 *  @access public
 */
const createPost = async (req: Request, res: Response): Promise<void> => {
	const postCreateDTO: postDTO.PostCreateDTO = req.body;

	try {
		const data: commonDTO.PostBaseResponseDTO = await postService.createPost(postCreateDTO);
		res.status(sc.CREATED).send(response.success(sc.CREATED, rm.CREATE_POST_SUCCESS, data));
	} catch (error: any) {
		console.error(error.message);
		res.send(sc.INTERNAL_SERVER_ERROR).send(response.fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
	}
};

/**
 *  @게시글_업데이트
 *  @route PUT /blog/:postId
 *  @access public
 */
const updatePost = async (req: Request, res: Response): Promise<void> => {
	const postUpdateDTO: postDTO.PostUpdateDTO = req.body;
	const { postId } = req.params;

	try {
		await postService.updatePost(postId, postUpdateDTO);

		res.status(sc.NO_CONTENT).send();
	} catch (error: any) {
		console.error(error.message);
		res.send(sc.INTERNAL_SERVER_ERROR).send(response.fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
	}
};

/**
 *  @게시글_찾기
 *  @route GET /blog/:postId
 *  @access public
 */
const findPost = async (req: Request, res: Response): Promise<void> => {
	const { postId } = req.params;

	try {
		const post = await postService.findPostById(postId);
		if (!post) res.status(sc.BAD_REQUEST).send(response.fail(sc.BAD_REQUEST, rm.NOT_FOUND));

		res.status(sc.OK).send(response.success(sc.OK, rm.READ_USER_SUCCESS, post!));
	} catch (error: any) {
		console.error(error.message);
		res.send(sc.INTERNAL_SERVER_ERROR).send(response.fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
	}
};

/**
 *  @게시글_삭제
 *  @route DELETE /blog/:postId
 *  @access public
 */
const deletePost = async (req: Request, res: Response): Promise<void> => {
	const { postId } = req.params;

	try {
		await postService.deletePost(postId);
		res.status(sc.NO_CONTENT).send();
	} catch (error: any) {
		console.error(error.message);
		res.send(sc.INTERNAL_SERVER_ERROR).send(response.fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
	}
};

const postController = {
	createPost,
	updatePost,
	findPost,
	deletePost,
};

export default postController;
