import { UserEntity } from '../entities/user.entity';
import * as UserRepository from '../repositories/user.repository';
import OrderService from './order.service';

class UserService {
  public async getCart(userId: string) {
    // Validate user
    const user = UserRepository.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    if (!user.cart) {
      // The user does not have a cart. Create one.
      user.cart = UserRepository.createCart(userId);
    }
    return user.cart;
  }

  public async updateCart(userId: string, cartData: any) {
    // Validate user
    const user = UserRepository.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    // Validate cart
    if (!user.cart) {
      throw new Error('Cart not found');
    }
    // Update cart
    user.cart = UserRepository.updateCart(userId, cartData);
    return user.cart;
  }

  public async deleteCart(userId: string) {
    // Validate user
    const user = UserRepository.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    // Delete cart
    UserRepository.deleteCart(userId);
  }

  public async checkout(userId: string, orderData: any) {
    const user = UserRepository.findById(userId);
    if (!user || !user.cart) {
      throw new Error('User or Cart not found');
    }
    const orderService = new OrderService();
    const newOrder = orderService.createOrder(userId, user.cart, orderData);
    UserRepository.updateUser(userId, { ...user, cart: undefined }); // clear the cart
    return newOrder;
  }
}

export default UserService;