import { Response } from "express";

export async function setCookie(token : string , res : Response){
    try {
        res.cookie("token" , token , {
            httpOnly : true,
            sameSite : "strict",
            maxAge : 60 * 60 * 10000
        })
    } catch (e : any) {
       console.log("error in setCookie function" , e.message) 
       throw e ;
    }
}