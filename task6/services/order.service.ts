import { v4 as uuidv4 } from 'uuid';
import { findById, updateUser } from '../repositories/user.repository';
import OrderRepository from '../repositories/order.repository';
import { CartEntity } from '../entities/cart.entity';

class OrderService {
    public async createOrder(userId: string, cart: CartEntity, orderData: any) {
        const newOrder = {
          id: uuidv4(),
          userId: userId,
          ...orderData,
          items: cart.items,
          total: cart.items.reduce((total, item) => total + (item.product.price * item.count), 0)
        };
        const user = findById(userId);
        user.orders.push(newOrder.id);
        updateUser(user.id, user);
        return OrderRepository.createOrder(newOrder);
    }

    // public async getOrders(userId: string) {
    //     const user = findById(userId);
        
    //     if (!user) {
    //       throw new Error('User not found');
    //     }
        
    //     const orders = user.orders.map(OrderRepository.getOrderById);  
    //     return orders.filter(order => !!order); // remove 'falsy' entries, if any exist
    //   }

    public async getOrders(userId: string) {
        const user = findById(userId);

        return user.orders;
    }
}

export default OrderService;