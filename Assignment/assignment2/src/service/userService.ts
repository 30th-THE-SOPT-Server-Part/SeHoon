import User from '../model/User';
import config from '../config';
import { userDTO, commonDTO } from '../DTO';

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

		const data: commonDTO.PostBaseResponseDTO = {
			_id: user._id,
		};

		return data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

const updateUser = async (userId: string, userUpdateDTO: userDTO.UserUpdateDTO) => {
	try {
		await User.findByIdAndUpdate(userId, userUpdateDTO);
	} catch (error) {
		console.log(error);
		throw error;
	}
};

const findUserById = async (userId: string) => {
	try {
		const user = await User.findById(userId);
		return user;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

const deleteUser = async (userId: string) => {
	try {
		await User.findByIdAndDelete(userId);
	} catch (error) {
		console.log(error);
		throw error;
	}
};

const userService = {
	createUser,
	updateUser,
	findUserById,
	deleteUser,
};

export default userService;
