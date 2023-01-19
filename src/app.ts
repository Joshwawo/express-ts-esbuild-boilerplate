import express, {Application, Request, Response} from "express";
import cors from "cors";
import morgan from "morgan";
import {router} from "./routes"

const app:Application = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(morgan('dev'))
app.use(router)

app.get('*', (_:Request,res:Response)=>{
  res.json({message: 'No existe esta ruta', statusCode: 400})
})

app.listen(PORT, ()=>{
  console.log(`server running on http://localhost:${PORT}`)
})
