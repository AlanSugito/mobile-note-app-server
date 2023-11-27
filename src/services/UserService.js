import { APIError } from "../utils/index.js";
import { loginSchema, registerSchema, validate } from "../validations/index.js";
import { prisma } from "../configs/index.js";
import bcrypt from "bcrypt";

class UserService {
  async register(data) {
    try {
      const validatedData = validate(data, registerSchema);

      const existedUser = await prisma.user.findUnique({
        where: { email: validatedData.email },
      });

      if (existedUser) throw new APIError(400, "Email already registered");

      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(data.password, salt);

      const user = await prisma.user.create({
        data: { ...validatedData, password },
        select: { first_name: true },
      });

      return user;
    } catch (error) {
      throw APIError.handleError(error);
    }
  }

  async login(credentials) {
    try {
      const validatedData = validate(credentials, loginSchema);
      const user = await prisma.user.findUnique({
        where: { email: validatedData.email },
      });

      if (!user) throw new APIError(404, "Email is not registered");

      const passwordIsValid = await bcrypt.compare(
        validatedData.password,
        user.password
      );

      if (!passwordIsValid) throw new APIError(400, "Password is not correct");

      const { id, first_name, last_name, email } = user;

      return { id, first_name, last_name, email };
    } catch (error) {
      throw APIError.handleError(error);
    }
  }
}

export default new UserService();
