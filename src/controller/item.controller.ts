import { Request, Response } from "express"
import { insertItem, getCars, getCar, updateCar, deleteCar } from "../services/item.service"
import { handleHttp } from "../utils/error.handle"

const getItems = async (rep: Request, res: Response) => {
  try {
    const response = await getCars();
    res.send(response)
  } catch(e) {
    handleHttp(res, "ERROR_GET_ITEMS")
  }
 }
const getItem  = async (req: Request, res: Response) => {
  try { 
    const { id } =  req.params
    const response = await getCar(id);
    res.send(response)
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM")
  }
}
const updateItem = async (req: Request, res: Response) => {
  try { 
    const { id } = req.params
    const { body } = req
    const response = await updateCar(id, body);
    res.send(response)
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEM")
  }
}
const postItem = async (req: Request, res: Response) => {
  try { 
    const { body } = req
    const response = await insertItem(body)
    res.send(response)
  } catch (e) {
    handleHttp(res, "ERROR_POST_ITEM")
  }
}
const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const response = await deleteCar(id);
    res.send(response)
   } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM")
  }
}

export  {
  getItem,
  getItems,
  updateItem,
  postItem,
  deleteItem
}