const {Router} = require ("express")
const { getIndex, getSignupPage } = require("../Controllers/user.controller")

const userRouter = Router()

userRouter.get("/" , getIndex);
userRouter.get("/Signup" , getSignupPage);

module.exports = userRouter