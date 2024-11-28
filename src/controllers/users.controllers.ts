import { Request, Response, NextFunction } from "express";
import User from "../models/users.models";
import { JwtPayload } from "jsonwebtoken";
import { errorMiddleware } from "../middleware/error.middleware";

interface CustomRequest extends Request {
  user?: JwtPayload;
}

const admin = async (req: Request, res: Response) => {
  const users = await User.find();
  res.status(200).json(users);
};

const user = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.user)
      return next(errorMiddleware(400, "No user found in request"));

    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) return next(errorMiddleware(404, "user not found"));
    res.status(200).send({ profile: user });
  } catch (error) {
    next(errorMiddleware(500, "Internal server error"));
  }
};

const manager = async (req: Request, res: Response) => {
  const users = await User.find({ role: "user" });
  res.status(200).json(users);
};

export { admin, manager, user };
