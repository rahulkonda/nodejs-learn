import { Request, Response } from 'express';
import ProductService from '../services/product.service';

class ProductController {
  public async getProducts(req: Request, res: Response) {
    try {
      const productService = new ProductService();
      const result = await productService.getProducts();
      res.status(200).json({ data: result });
    } catch (error) {
        console.error('error in getProducts controller',error)
        // handle the error
    }
  }

  public async getProduct(req: Request, res: Response) {
    try {
      const productService = new ProductService();
      const result = await productService.getProduct(req.params.productId);
      res.status(200).json({ data: result });
    } catch (error) {
      // handle the error
      console.error('error in getProduct controller',error)

    }
  }
}

export default new ProductController();
