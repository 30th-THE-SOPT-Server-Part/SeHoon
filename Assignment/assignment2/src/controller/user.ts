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
	} catch (err) {
		console.error(err.message);
		res.send(sc.INTERNAL_SERVER_ERROR).send(response.fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
	}
};

const userController = {
	createUser,
};

export default userController;
