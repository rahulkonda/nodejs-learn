import { ProductEntity } from './product.entity';

export interface CartItemEntity {
  product: ProductEntity;
  count: number;
}

export interface CartEntity {
  id: string;
  userId: string;
  isDeleted: boolean;
  items: CartItemEntity[];
}

const cart: CartEntity = {
  id: '1',
  userId: 'admin',
  isDeleted: false,
  items: []
}

export default cart;