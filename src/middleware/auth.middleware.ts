import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { errorMiddleware } from "./error.middleware";

dotenv.config();

interface CustomRequest extends Request {
  user?: any;
}

const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const authHeader: any | undefined =
    req.headers.authorization || req.headers.Authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(errorMiddleware(401, "No token, authorization denied"));
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
    };
    (req as CustomRequest).user = decoded;
    next();
  } catch (error) {
    res.status(400).send({ message: "Token not valid" });
  }
};

export default verifyToken;
