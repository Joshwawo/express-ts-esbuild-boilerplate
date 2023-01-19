import {connect, set} from 'mongoose'

export const dbConnect =async ():Promise<void> => {
  try {
    set("strictQuery", false)
    const db = await connect(String(process.env.MONGODB_URI))
    console.log(`conectado a la bd : ${db.connect.name}`)
  } catch (error) {
    console.log(error)
  }
}