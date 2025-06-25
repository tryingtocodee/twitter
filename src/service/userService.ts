import { createUserDto, loginUserDto } from "../dto/userDto";
import b from "bcryptjs"
import cloudinary from "../config/cloudinaryConfig";
import { createUserRepo, loginUserRepo } from "../repo/userRepo";
import { loginSchema } from "../validation/userValidation";
import User from "../db/models/userModel";

export async function createUserService(userDto : createUserDto){
    try {
       const hashedPassword = await b.hash(userDto.password , 10)
         if(userDto.profilePic){
            const uploadProfilePic = await cloudinary.uploader.upload(userDto.profilePic)
            userDto.profilePic = uploadProfilePic.secure_url
         }

         if(userDto.backProfilePic){
            const uploadBackProfile = await cloudinary.uploader.upload(userDto.backProfilePic)
            userDto.backProfilePic = uploadBackProfile.secure_url
         }
       
       userDto.password = hashedPassword 

       const user = await createUserRepo(userDto)

       if(!user){
        throw new Error("error in creating user")
       }

       return user

    } catch (e : any) {
       console.log("error in create user service" , e.message)
       throw Error(e); 
    }
}

export async function loginService(userDto : loginUserDto){
   try {
      const user = await loginUserRepo(userDto)

      if(!user){
         throw new Error("failed to get user ")
      }
      return user
   } catch (e : any) {
     console.log("error in login user service " , e.message) 
      throw Error(e)
   }
}