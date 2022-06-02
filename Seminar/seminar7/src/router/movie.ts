import { Router } from 'express';
import { check } from 'express-validator';
import { movieController } from '../controller';

const router = Router();

router.post(
	'/',
	[check('title').notEmpty().isString(), check('director').notEmpty().isString()],
	movieController.createMovie,
);
router.put('/:movieId', movieController.updateMovie);
router.get('/', movieController.searchMovie);
router.get('/:movieId', movieController.getMovie);
router.delete('/:movieId', movieController.deleteMovie);

export default router;
