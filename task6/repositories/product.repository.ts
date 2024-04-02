import { ProductEntity, products } from '../entities/product.entity';

class ProductRepository {
  public getProducts(): ProductEntity[] {
    return products;
  }

  public getProduct(id: string): ProductEntity | undefined {
    return products.find(product => product.id === id);
  }
}

export default new ProductRepository();