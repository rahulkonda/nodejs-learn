import { Router } from 'express';
import productController from '../controllers/product.controller';

const router = Router();

router.get('/', productController.getProducts);
router.get('/:productId', productController.getProduct);

export default router;