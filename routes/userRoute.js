import express from "express";

import expressAsyncHandler from "express-async-handler";

import bcrypt from "bcryptjs";

import User from "../models/userModel.js";

import { generateToken, isAuth } from "../utils.js";

const userRouter = express.Router();

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ username: req.body.username });

    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          username: user.username,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });

        return;
      }
    }
    res.status(401).send({ message: "Invaild user-name or password" });
  })
);

userRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      userName: req.body.userName,
      password: bcrypt.hashSync(req.body.password, 8),
      isAdmin: req.body.isAdmin,
    });

    const createdUser = await user.save();

    res.send({
      _id: createdUser._id,
      userName: createdUser.userName,
      isAdmin: createdUser.isAdmin,
      token: generateToken(createdUser),
    });
  })
);

userRouter.put(
  "/editprofile",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
      user.userName = req.body.userName || user.userName;

      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 8);
      }

      const updateUser = await user.save();

      res.send({
        _id: updateUser._id,
        userName: updateUser.userName,
        isAdmin: updateUser.isAdmin,
        token: generateToken(updateUser),
      });
    }
  })
);

export default userRouter;
