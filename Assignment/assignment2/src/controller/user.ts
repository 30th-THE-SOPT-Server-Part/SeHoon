import { userDTO, commonDTO } from '../DTO';
import { Request, Response } from 'express';
import { response } from '../library';
import { userService } from '../service';
import { sc, rm } from '../constant';

/**
 *  @유저_생성
 *  @route POST /user
 *  @access public
 */
const createUser = async (req: Request, res: Response): Promise<void> => {
	const userCreateDTO: userDTO.UserCreateDTO = req.body;

	try {
		const data: commonDTO.PostBaseResponseDTO = await userService.createUser(userCreateDTO);
		res.status(sc.CREATED).send(response.success(sc.CREATED, rm.SIGNIN_SUCCESS, data));
	} catch (error) {
		console.error(error.message);
		res.send(sc.INTERNAL_SERVER_ERROR).send(response.fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
	}
};

/**
 *  @유저_업데이트
 *  @route PUT /user/:userId
 *  @access public
 */
const updateUser = async (req: Request, res: Response): Promise<void> => {
	const userUpdateDTO: userDTO.UserUpdateDTO = req.body;
	const { userId } = req.params;

	try {
		await userService.updateUser(userId, userUpdateDTO);

		res.status(sc.NO_CONTENT).send();
	} catch (error) {
		console.error(error.message);
		res.send(sc.INTERNAL_SERVER_ERROR).send(response.fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
	}
};

/**
 *  @유저_찾기
 *  @route GET /user/:userId
 *  @access public
 */
const findUser = async (req: Request, res: Response): Promise<void> => {
	const { userId } = req.params;

	try {
		const user = await userService.findUserById(userId);
		res.status(sc.OK).send(response.success(sc.OK, rm.READ_USER_SUCCESS, user));
	} catch (error) {
		console.error(error.message);
		res.send(sc.INTERNAL_SERVER_ERROR).send(response.fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
	}
};

/**
 *  @유저_삭제
 *  @route DELETE /user/:userId
 *  @access public
 */
const deleteUser = async (req: Request, res: Response): Promise<void> => {
	const { userId } = req.params;

	try {
		await userService.deleteUser(userId);
		res.status(sc.NO_CONTENT).send();
	} catch (error) {
		console.error(error.message);
		res.send(sc.INTERNAL_SERVER_ERROR).send(response.fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
	}
};

const userController = {
	createUser,
	updateUser,
	findUser,
	deleteUser,
};

export default userController;
