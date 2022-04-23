import User from '../model/User';
import config from '../config';
import { userDTO } from '../DTO';

const createUser = async (userCreateDTO: userDTO.UserCreateDTO) => {
	try {
		const user = new User({
			name: userCreateDTO.name,
			phone: userCreateDTO.phone,
			email: userCreateDTO.email,
			age: userCreateDTO.age,
			school: userCreateDTO.school,
		});

		await user.save();

		const data = {
			_id: user._id,
		};

		return data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

const userService = {
	createUser,
};

export default userService;
