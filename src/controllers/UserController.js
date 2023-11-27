import { UserService } from "../services/index.js";

class UserController {
  async register(req, res, next) {
    try {
      await UserService.register(req.body);

      res.status(201).json({ message: "Successfully registered" });
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const result = await UserService.login(req.body);

      res.status(200).json({ message: "Successfully logged in", data: result });
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
