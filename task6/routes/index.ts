import { Router } from 'express';
import userRoutes from './user.routes';

const router = Router();

router.use('/profile', userRoutes);

export default router;