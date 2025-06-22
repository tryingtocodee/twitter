import {z} from "zod"

export const createUserValidation = z.object({
    username : z.string(),
    email : z.string().email(),
    password : z.string(),
    profilePic : z.string().optional(),
    backProfilePic : z.string().optional(),
    bio : z.string().optional()
})