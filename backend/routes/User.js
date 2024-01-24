const express = require("express")
const User_Zod_Schema = require("../zodSchema/ZodUserSchema")
const secret_key = process.env.JWT_SECRET
const { authMiddleware } = require("../middleware")
const { updateBody } = require("../zodSchema/updated_UserSchema")

const app = express()

const { User, AccountTable } = require("../db/Index")
const bodyParser = require("body-parser")

const UserRouter = express.Router()
const jwt = require("jsonwebtoken")

app.use(express.json())

UserRouter.post("/signup", async (req, res) => {
  console.log(req.body)

  const user = req.body.user
  console.log(user)
  const response = User_Zod_Schema.safeParse(user)

  if (!response.success) {
    return res.status(200).json({
      error: true,
      success: false,
      message: "Invalid User data",
    })
  }

  const existing_User = await User.findOne({ userName: user.userName })

  if (existing_User) {
    res.json({
      msg: "User is already exist please login ",
    })
  } else {
    const user_now=await User.create(user)
    const userId=user_now._id;
    await AccountTable.create({
     userId,
     balance:1+Math.random()*1000

    })
    let token = jwt.sign(user, secret_key)
    console.log(token)
    
  }

  res.json({
    msg: "User has been created ",
  })
})

UserRouter.get("/bulk", async (req, res) => {
  const filter = req.query.filter || ""
  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  })

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  })
})

UserRouter.post("/singin", (req, res) => {})

UserRouter.use(authMiddleware).put("/update_info", async (req, res) => {
  const { success } = updateBody.safeParse(req.body)
  if (!success) {
    res.status(411).json({
      message: "Error while updating information",
    })
  }

  await User.updateOne(
    { userName: req.userName },
    {
      userName: req.body.userName,
      
    }
  )

  res.json({
    message: "Updated successfully",
  })
})

module.exports = UserRouter
