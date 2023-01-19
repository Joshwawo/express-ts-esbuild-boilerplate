import { Router } from "express";
import { HolaController } from "../controllers/holaCtrl";

const router = Router()
router.get('/', HolaController)

export{router}