import { Router } from 'express';
import userController from '../controllers/user.controller';

const router = Router();

router.get('/cart', userController.getCart);
router.put('/cart', userController.updateCart);
router.delete('/cart', userController.deleteCart);

export default router;