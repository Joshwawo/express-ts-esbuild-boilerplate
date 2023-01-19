import {JwtPayload} from 'jsonwebtoken'
import {Request} from 'express'

export interface ReqMdware extends Request {
  user?: string | JwtPayload | null | object | undefined | any
}

export interface id {
  id:string
}