import { Request, Response } from 'express';
import OrderService from '../services/order.service';

class OrderController {
  public async getOrders(req: Request, res: Response) {
    try {
      const userId = req.headers['x-user-id'] as string;
      const orderService = new OrderService();
      const result = await orderService.getOrders(userId);
      res.status(200).json({ data: result });
    } catch (error) {
      // handle the error
      console.log('error during getOrders', error)
    }
  }
}

export default new OrderController();