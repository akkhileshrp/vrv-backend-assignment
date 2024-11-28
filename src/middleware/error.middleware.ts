import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

interface AppError extends Error {
  statusCode?: number;
}

// middleware factory function

export function errorMiddleware(statusCode: number, msg: string): AppError {
  const error: AppError = new Error(msg);
  error.statusCode = statusCode;
  return error;
}

// centralized error handler

export const errorHandler: ErrorRequestHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("Error Handler Invoked with Error Object:", err);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).send({ error: message });
};
