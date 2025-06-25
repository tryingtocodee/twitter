import express from "express"
import { createUser, loginController } from "../../controller/userController"

const router = express.Router()

router.post("/" , createUser)
router.get("/" , loginController)
export default router