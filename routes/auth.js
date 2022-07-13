const express = require("express");
const User = require("../models/user");
const router = express.Router();
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  const user = new User({
    username: "lamhong",
    email: "lamhong@gmail.com",
    password: "lamvanhong",
  });
  await user.save();
  res.send("ok");
});

router.post("/login", async (req, res) => {
  try {
    const existUser = await User.findOne({ username: req.body.username });
    if (!existUser) {
      res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    const checkValidPassword = await bcrypt.compareSync(
      req.body.password,
      existUser.password
    );

    if (checkValidPassword) {
      res.json({
        success: true,
        user: existUser,
      });
    } else {
      res.json({
        success: false,
        message: "password and username not match",
      });
    }
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});
router.post("/register", async (req, res) => {
  try {
    const exitsUser = await User.findOne({ username: req.body.username });
    if (exitsUser) {
      res.status(409).json({
        success: false,
        message: "user has been exists",
      });
    }

    const hashPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    });
    const savedUser = await user.save();
    if (savedUser) {
      res.status(200).json({
        success: true,
        user: savedUser,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
