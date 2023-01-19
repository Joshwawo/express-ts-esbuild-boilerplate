import { verify } from "jsonwebtoken";
import {Response, NextFunction } from "express";
import userModel from '@/models/userModel'
import {ReqMdware, id} from '@/types/user/reqType'


const checkAuth = async (req: ReqMdware, res: Response, next: NextFunction) => {
  let token:string | undefined ;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = verify(token, String(process.env.JWT_SECRET));
      req.user = await userModel.findById({
        _id: (decoded as id).id,
      }).select("-password, -confirmado, -token -__v -createdAt -updatedAt");
      return next();
    } catch (error) {
      return res.status(401).json({ message: "Your JsonWebToken, not valid" });
    }
  }
  if (!token) {
    const error = new Error("No token, authorization denied");
    return res.status(401).json({ message: error.message });
  }
  next();
};

export default checkAuth;