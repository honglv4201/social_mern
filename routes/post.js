const Post = require("../models/Post");

const router = require("express").Router();

//create post
router.post("/", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    if (savedPost) {
      return res.json({
        success: true,
        post: savedPost,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "dont know",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
});

//delete Post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      return res.json({
        success: true,
        message: "delete completely",
      });
    } else {
      return res.status(403).json({
        success: false,
        message: "you cant delete this post",
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err,
    });
  }
});

module.exports = router;
