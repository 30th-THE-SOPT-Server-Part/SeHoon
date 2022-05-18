import Post from '../model/Post';
import { commonDTO, postDTO } from '../DTO';

const createPost = async (postCreateDTO: postDTO.PostCreateDTO) => {
	try {
		const post = new Post({
			title: postCreateDTO.title,
			content: postCreateDTO.content,
		});

		await post.save();

		const data: commonDTO.PostBaseResponseDTO = {
			_id: post._id,
		};

		return data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

const updatePost = async (postId: string, postUpdateDTO: postDTO.PostUpdateDTO) => {
	try {
		await Post.findByIdAndUpdate(postId, postUpdateDTO);
	} catch (error) {
		console.log(error);
		throw error;
	}
};

const findPostById = async (postId: string) => {
	try {
		const post = await Post.findById(postId);
		return post;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

const deletePost = async (postId: string) => {
	try {
		await Post.findByIdAndDelete(postId);
	} catch (error) {
		console.log(error);
		throw error;
	}
};

const postService = {
	createPost,
	updatePost,
	findPostById,
	deletePost,
};

export default postService;
