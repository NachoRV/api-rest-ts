import { hash, compare } from 'bcryptjs'

const SALT = 10

const encrypt = async (password: string ) => {
  return await hash(password, SALT);
}

const verified = async (pass: string, passHas: string) => {
  return await compare(pass, passHas);
} 

export  { encrypt, verified }