import { NextFunction, Request, Response } from "express";
import { errorMiddleware } from "../middleware/error.middleware";
import User from "../models/users.models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const isExistingUser = await User.findOne({ username });
    if (isExistingUser)
      return next(errorMiddleware(409, "User already exists"));

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();
    res.status(201).send({ message: "User registered successfully", newUser });
  } catch (error) {
    next(errorMiddleware(500, "Internal Server Error"));
  }
};

const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { username, password } = req.body;
    const isUser = await User.findOne({ username });
    if (!isUser) return next(errorMiddleware(404, "User not found"));

    const isMatch = await bcrypt.compare(password, isUser.password);
    if (!isMatch) return next(errorMiddleware(401, "Invalid credentials"));

    const token = jwt.sign(
      { id: isUser._id, role: isUser.role },
      process.env.JWT_SECRET!,
      {
        expiresIn: "1h",
      }
    );

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 45 * 60 * 1000,
      sameSite: "strict",
    });

    res.status(200).send({ message: "Login successful", token });
  } catch (error) {
    next(errorMiddleware(500, "Internal Server Error"));
  }
};

const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.clearCookie("token");
    res.status(200).send({ message: "Logged out successfully" });
  } catch (error) {
    next(errorMiddleware(500, "Internal server error"));
  }
};

export { register, login, logout };
