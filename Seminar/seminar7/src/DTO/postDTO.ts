namespace postDTO {
	export interface PostCreateDTO {
		title: string;
		content: string;
	}

	export interface PostUpdateDTO {
		title?: string;
		content?: string;
	}
}

export default postDTO;
