const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
//update user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (!req.body) {
      return res.status(400).json({
        success: false,
        message: "missing",
      });
    }
    if (req.body.password) {
      try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error,
        });
      }
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      if (updatedUser) {
        return res.json({
          success: true,
          updatedUser,
        });
      } else {
        return res.status(500).json({
          success: false,
          message: "serverhas problem",
        });
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "d",
      });
    }
  } else {
    res.status(403).json({
      success: false,
      message: "you can update only your account",
    });
  }
});

// get user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      return res.json({
        success: true,
        user,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "not found user",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
});

//delete user
router.delete("/:id", async (req, res) => {
  if (req.params.id === req.body.userId || req.body.isAdmin) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({
      success: true,
      message: "delete account successfully",
    });
  } else {
    return res.status(403).json({
      success: false,
      message: "you can only delete your account",
    });
  }
});

module.exports = router;
