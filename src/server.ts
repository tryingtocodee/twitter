import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRoutes from "./route/v0/authRoutes"
dotenv.config()

const app = express()

const port = process.env.PORT

app.use(express.json())
app.use(cookieParser())

app.use("/api/v0/auth" , authRoutes) // -- tested user route working fine 
app.use("/api/v0/profile") // get everything relared to user profile 
app.use("/api/v0/post")
app.use("/api/v0/comment")
app.use("/api/v0/retweet")
app.use("/api/v0/like")


app.listen(port , ()=>{
    console.log("server runing on port " , port)
})