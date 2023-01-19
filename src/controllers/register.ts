import { Request, Response } from "express";
import {registerServices} from '../services/register.service'

export const hi = async (req: Request, res: Response) => {
  res.json({ message: "Hi!" });
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const response = await registerServices(req.body)

    if(response instanceof Error){
      return res.status(400).json({message: response.message})
    }
    res.json(response)
    
  } catch (error) {
    console.log(error)
    return res.status(500).json({message: error})
  }
};