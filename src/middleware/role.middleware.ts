import { Request, Response, NextFunction } from "express";
interface CustomRequest extends Request {
  user?: {
    role: string;
  };
}

const authorizeRole = (...allowedRoles: string[]) => {
  return (req: CustomRequest, res: Response, next: NextFunction): void => {
    if (!allowedRoles.includes(req.user?.role || "")) {
      res.status(403).json({ message: "Access denied." });
    }
    next();
  };
};

export default authorizeRole;
