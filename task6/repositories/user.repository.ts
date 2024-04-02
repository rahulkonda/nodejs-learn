import { CartEntity } from '../entities/cart.entity';
import { UserEntity, user as initialUser } from '../entities/user.entity';
import { v4 as uuidv4 } from 'uuid';

// In-memory data store
const users: {[key: string]: UserEntity} = {
    'admin':initialUser
};

export function findById(userId: string): UserEntity | undefined {
    console.log(users); // log the users
  return users[userId];
}

export function updateUser(userId: string, user: UserEntity): void {
    users[userId] = user;
}

export function createCart(userId: string): CartEntity {
  const cart: CartEntity = {
    id: uuidv4(),
    userId,
    isDeleted: false,
    items: [],
  };
  users[userId].cart = cart;
  return cart;
}

export function updateCart(userId: string, cartData: any): CartEntity {
  const cart = users[userId].cart;
  if (!cart) {
    throw new Error('Cart not found');
  }
  cart.items = [...cartData.items];
  return cart;
}

export function deleteCart(userId: string): void {
  const user = users[userId];
  user.cart = undefined;
}