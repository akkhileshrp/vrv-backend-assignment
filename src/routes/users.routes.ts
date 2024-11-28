import express from "express";
import { admin, manager, user } from "../controllers/users.controllers";
import verifyToken from "../middleware/auth.middleware";
import authorizeRole from "../middleware/role.middleware";
import {
  addNewUser,
  deleteUser,
  updateUser,
} from "../controllers/admincrud.controllers";

const router = express.Router();

router
  .route("/user")
  .get(verifyToken, user, authorizeRole("admin", "manager", "user"));

router.route("/admin").get(verifyToken, authorizeRole("admin"), admin);

router
  .route("/admin/add-user")
  .post(verifyToken, authorizeRole("admin"), addNewUser);

router
  .route("/admin/delete-user/:id")
  .delete(verifyToken, authorizeRole("admin"), deleteUser);

router
  .route("/admin/update-user/:id")
  .put(verifyToken, authorizeRole("admin"), updateUser);

router
  .route("/manager")
  .get(verifyToken, authorizeRole("admin", "manager"), manager);

export default router;
