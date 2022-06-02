namespace movieDTO {
	export interface MovieCreateDTO {
		title: string;
		director: string;
		openingDate?: Date;
		thumbnail?: string;
		content?: string;
	}

	export interface MovieUpdateDTO {
		title?: string;
		director?: string;
		openingDate?: Date;
		thumbnail?: string;
		content?: string;
	}

	export interface MovieResponseDTO {
		title: string;
		director: string;
		thumbnail?: string;
		content?: string;
	}

	export interface MoviesResponseDTO {
		movies: MovieResponseDTO[];
		lastPage: number;
	}
}

export default movieDTO;
