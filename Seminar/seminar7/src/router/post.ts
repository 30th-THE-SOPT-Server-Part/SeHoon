import express from 'express';
import { blogController } from '../controller';

const router = express.Router();

router.post('/', blogController.createPost);
router.put('/:postId', blogController.updatePost);
router.get('/:postId', blogController.findPost);
router.delete('/:postId', blogController.deletePost);

export default router;
