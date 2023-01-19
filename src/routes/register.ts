import { Router } from "express";
import {hi, registerUser} from '../controllers/register'

const router = Router()

router.route("/").get(hi).post(registerUser)


export{
  router
}