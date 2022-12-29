import { sign, verify } from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "123"

const generateToken = (id: string) => {
  const jwt = sign({id} ,SECRET, {
    expiresIn: "2h"
  });
  return jwt;
}

const verifiedToken = (token: string) => {
  return <{ id: string, iat: number, exp: number }>verify(token, SECRET)
}

export {
  generateToken,
  verifiedToken
}