import User from "../db/models/userModel";
import { createUserDto, loginUserDto } from "../dto/userDto";

export async function createUserRepo(userDto : createUserDto){
    try {
       const user = await User.findOne({where : {email: userDto.email}}) 

       if(user){
        throw new Error("user with this username already exists ")
       }

       const newUser = await User.create({
        username : userDto.username,
        email : userDto.email,
        bio : userDto.bio,
        backgroundProfilePic : userDto.backProfilePic,
        password : userDto.password,
        profilePic : userDto.profilePic
       })

       return newUser;
    } catch (e  : any) {
        console.log("error in create user repo" , e.message)
        throw Error(e)    
    }
}

export async function loginUserRepo(userDto : loginUserDto){
    try {
        const user = await User.findOne({where : {email : userDto.email}})        

        if(!user){
            throw new Error("User with this eamil already exists")
        }

        return user

    } catch (e : any) {
        console.log("error in login user repo" , e.message)        
        throw Error(e)
    }
}