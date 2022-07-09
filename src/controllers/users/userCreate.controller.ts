import { Request, Response } from "express";
import userCreateServices from "../../services/users/userCreate.service";

const userCreateController = async (req: Request, res: Response) => {
  
  try {
    const { name, email, password, age } = req.body;
    const newUser = await userCreateServices({name, email, password, age});

    return res.status(201).send(newUser);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message
      });
    }
  }
};
export default userCreateController;
