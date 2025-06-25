export type createUserDto = {
    username : string 
    email : string 
    password : string 
    profilePic? : string 
    backProfilePic? : string
    bio? : string
}

export type loginUserDto = {
    email : string
    password : string
}