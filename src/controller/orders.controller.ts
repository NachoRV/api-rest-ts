import { Request, Response } from "express"
import { getOrder } from "../services/order.service"
import { handleHttp } from "../utils/error.handle"
import { RequestExtend } from "../interfaces/request.interface"

const getOrders = async (req : RequestExtend, res: Response) => {
  try {
    console.log(req.user)
    const response = await getOrder()
    res.send(response)
   } catch (e) {
    handleHttp(res, "ERROR_GET_BLOGS")
  }
}

export { getOrders }