import userModel from '../models/userModel'
import {generateRandomId} from '../helpers/randomId'
export const registerServices = async (body: any) => {
  //TODO: Add interface for body request for new user register

  try {
    const { email } = body;
    //comprobe if the user already exist
    const alreadyExist = await userModel.findOne({email})

    if(alreadyExist){
      const error = new Error('User already exist')
      return error
    }

    const newUser = new userModel(body)
    newUser.token = generateRandomId()
    await newUser.save()
    //TODO: Email Confirmation
    return {
      message: 'User created correctly, check your email to confirm your account.'
    }

  } catch (error:any) {
    // console.log(error.message);
    throw error.message

  }
};
