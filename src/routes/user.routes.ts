import { Router } from "express";
import userCreateController from "../controllers/users/userCreate.controller";
import userDeleteController from "../controllers/users/userDelete.controller";
import userListController from "../controllers/users/userList.controller";
import userListOneController from "../controllers/users/userListOne.controller";
import userUpdateController from "../controllers/users/userUpdate.controller";

const users = Router();

users.post("/", userCreateController);
users.get("/", userListController);
users.get("/:id", userListOneController);
users.patch("/:id", userUpdateController);
users.delete("/:id", userDeleteController)

export default users;
