import { Request, Response } from 'express';
import UserService from '../services/user.service';

class UserController {
  public async getCart(req: Request, res: Response) {
    try {
      const userId = req.headers['x-user-id'] as string;
      const userService = new UserService();
      const result = await userService.getCart(userId);
      res.status(200).json({ data: result });
    } catch (error) {
        console.log('error while getting cart',error)
      // handle error
    }
  }

  public async updateCart(req: Request, res: Response) {
    try {
      const userId = req.headers['x-user-id'] as string;
      const userService = new UserService();
      const result = await userService.updateCart(userId, req.body);
      res.status(200).json({ data: result });
    } catch (error) {
      // handle error
    }
  }

  public async deleteCart(req: Request, res: Response) {
    try {
      const userId = req.headers['x-user-id'] as string;
      const userService = new UserService();
      await userService.deleteCart(userId);
      res.status(200).json({ data: { success: true } });
    } catch (error) {
      // handle error
    }
  }

  public async checkout(req: Request, res: Response) {
    try {
      const userId = req.headers['x-user-id'] as string;
      const userService = new UserService();
      const result = await userService.checkout(userId, req.body);
      res.status(200).json({ data: result });
    } catch (error) {
      // handle the error
    }
  }
}

export default new UserController();