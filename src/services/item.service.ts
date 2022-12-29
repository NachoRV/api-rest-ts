import { Car } from "../interfaces/Car";
import ItemModel from "../models/items.model";

const insertItem = async ( item: Car) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
}

const getCars = async () => {
  return await ItemModel.find({})
}
const getCar = async (id: string) => {
  return await ItemModel.findOne({_id: id})
}

const updateCar = async (id: string, data: Car) => {
  return await ItemModel.findByIdAndUpdate({_id: id}, data, {
    new: true
  })
}

const deleteCar = async (id: string) => {
  return await ItemModel.remove({ _id: id })
}

export { insertItem, getCars, getCar, updateCar, deleteCar };