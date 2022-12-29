import { Router } from "express";
import { getOrders } from "../controller/orders.controller";
import { checkJwt } from "../middleware/session.middleware";

const router = Router()

router.get('/', checkJwt, getOrders)

export { router }