import { Request, Response } from "express";

export const HolaController = (_:Request, res:Response)=>{
  res.json({message: 'Hola como estas'})
}