import { Router } from 'express';
import { getUsers, createUser } from '../controller/usercontroller';

const router = Router();

router.get('/', getUsers);

router.post('/', createUser);

export default router;
