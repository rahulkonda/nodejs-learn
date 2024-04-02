import ProductRepository from '../repositories/product.repository';

class ProductService {
  public async getProducts() {
    return ProductRepository.getProducts();
  }

  public async getProduct(id: string) {
    const product = ProductRepository.getProduct(id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }
}

export default ProductService;