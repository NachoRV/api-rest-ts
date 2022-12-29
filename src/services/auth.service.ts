import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model"
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle"

const registerNewUser = async ( {email, password, name }: User ) => {
  const userExist = await UserModel.findOne({ email });
  if (userExist) return "USER_ALREADY_EXIST"
  const passHas = await encrypt(password);
  const newUser = await UserModel.create({ email, password: passHas, name })
  return newUser

}

const loginUser = async ({ email, password }: User) => {
  const user = await UserModel.findOne({ email });
  if (!user) return "USER_NOT_FOUND"

  const isCorrect = await verified(password, user.password)

  if(!isCorrect) return "INVALID_DATA"
  const token = generateToken(`${user._id}`)

  return ({ token, user })



}

export { registerNewUser, loginUser }