import { Request, Response, NextFunction } from "express";
import { errorMiddleware } from "../middleware/error.middleware";
import bcrypt from "bcryptjs";
import User from "../models/users.models";

const addNewUser = async (req: Request, res: Response, next: NextFunction) => {
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

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) return next(errorMiddleware(404, "User not found"));

    res.status(200).send({ message: "User deleted successfully", deletedUser });
  } catch (error) {
    next(errorMiddleware(500, "Internal server error"));
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { username, email, role } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { username, email, role },
      { new: true }
    );

    if (!updatedUser) return next(errorMiddleware(404, "User not found"));

    res.status(200).send({ message: "User updated successfully", updatedUser });
  } catch (error) {
    next(errorMiddleware(500, "Internal server error"));
  }
};

export { addNewUser, deleteUser, updateUser };
