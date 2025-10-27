// src/routes/studyRoutes.ts

import { Router } from 'express';
import { UserController } from '../controller/usercontroller'; // Assumindo um StudyController

const router = Router();
const studyController = new UserController();


router.get('/', studyController.getAllStudies);
router.get('/:id', studyController.getStudyById);
router.post('/', studyController.createStudy);
router.put('/:id', studyController.updateStudy);
router.delete('/:id', studyController.deleteStudy);

export const studyRoutes = router;