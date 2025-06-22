import { createUserDto } from "../dto/userDto";
import { Request ,  Response} from "express"
import { createUserValidation } from "../validation/userValidation";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { createUserService } from "../service/userService";
import { setCookie } from "../utils/setCookie";

dotenv.config()
const jwtSecret = process.env.JWT_SECRET

export async function createUser(req : Request , res : Response):Promise<any>{
    try {
       const validation = createUserValidation.safeParse(req.body) 

       if(!validation.success){
        return res.status(400).json({
            msg : "incorrect input",
            error : validation.error.errors
            })
       }
       const user = await createUserService(validation.data)

       if(!user){
        return res.status(500).json("failed to create user")
       }

       if(!jwtSecret){
            console.log("jwt secret not found in create user controller")
            return res.status(500).json("Internal server error")
       }

       const token = jwt.sign({email : user.email}, jwtSecret , {expiresIn : "1h"})

       setCookie(token , res)

       return res.json({
            msg : "user created successfully",
            user : {
                id : user.id ,
                username : user.username ,
                email : user.email ,
                profilePic : user.profilePic ,
            }
        })
    } catch (e : any) {
        console.log("error in sign up controller " , e.message)
        return res.status(500).json("Internal server error")
    }
}