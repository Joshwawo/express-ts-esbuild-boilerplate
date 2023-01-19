import {Schema,model} from 'mongoose'
import bcrypt from 'bcryptjs'
import {User} from '@/types/user/user'

const UserSchema = new Schema<User>({
  firstName: {
    type: String,
    require:true,
    trim:true
  },
  lastName:{
    type:String,
    required:true,
    trim:true
  },
  password:{
    type:String,
    required:true,
    trim:true
  },
  email:{
    type:String,
    required:true,
    trim:true,
    unique:true,
    
  },
  confirm:{
    type:Boolean,
    default:false
  },
  token:{
    type:String,
    
  }

},{
  timestamps:true
})

UserSchema.pre("save", async function (next) {
  if(!this.isModified("password")){
    next()
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.comparePassword = async function (passwordForm:string) {
  
}

const UserModel =  model('User', UserSchema)
export default UserModel