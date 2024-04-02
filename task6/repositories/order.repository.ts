import { OrderEntity } from '../entities/order.entity';

class OrderRepository {
  private orders: {[key: string]: OrderEntity} = {};

  public createOrder(orderData: OrderEntity): OrderEntity {
    this.orders[orderData.id] = orderData;
    return this.orders[orderData.id];
  }

//    public getOrderById(orderId: string): OrderEntity | undefined {
//     return this.orders[orderId];
//    }
}

export default new OrderRepository();