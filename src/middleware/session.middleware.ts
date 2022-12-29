import { NextFunction, Request, Response } from "express";
import { isNamedExportBindings } from "typescript";
import { verifiedToken } from "../utils/jwt.handle";
import { RequestExtend } from "../interfaces/request.interface"


const checkJwt = (req: RequestExtend, res: Response, next: NextFunction) => {

  try {
    const authorization = req.headers.authorization || null 
    const token = authorization?.split(' ').pop() || "";
    const data = verifiedToken(token);
    next();
  } catch(e) {
    res.status(400)
    res.send("INVALID_TOKEN")
  }

}

export { checkJwt }