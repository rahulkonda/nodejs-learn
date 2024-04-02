import { CartEntity, CartItemEntity } from './cart.entity';
import { OrderEntity } from './order.entity';

export interface UserEntity {
  id: string;
  cart?: CartEntity;
  orders: string[]; // An array of order IDs
}

export const user: UserEntity = {
  id: 'admin',
  cart: undefined,
  orders: [],
};