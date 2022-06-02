import { Router } from 'express';
import { fileController } from '../controller';
import { upload } from '../middleware';

const router = Router();

router.post('/', upload.array('file'), fileController.uploadFiles);

export default router;
