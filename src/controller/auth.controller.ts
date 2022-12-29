import { Request, Response } from "express"
import { loginUser, registerNewUser } from '../services/auth.service'

export  const register = async (req: Request, res: Response) => {
  const { body } = req;
  const response =  await registerNewUser(body);
  res.send(response)
}
export const login = async  (req: Request, res: Response) => {
  const { body } = req;
  const response = await loginUser(body);
  res.send(response);
}