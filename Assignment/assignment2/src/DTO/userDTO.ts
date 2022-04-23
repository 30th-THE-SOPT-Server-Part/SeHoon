import { schoolDTO } from '.';

namespace userDTO {
	export interface UserCreateDTO {
		name: string;
		phone: string;
		email: string;
		age?: string;
		school?: schoolDTO.SchoolInfoDTO;
	}
}

export default userDTO;
