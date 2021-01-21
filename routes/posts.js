const express = require("express"); // import express
const router = express.Router();
const Post = require("../models/Post");
//ALL THE POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().limit(5);
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
  //   res.send("We are on posts");
});
//GET SPECIFIC POSTS
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
  //   console.log(req.params.postId);
});
//SUBMIT A POST
router.post("/", async (req, res) => {
  //   console.log(req.body);
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});
//DELETE A POST
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//UPDATE A POST
router.patch("/:postId", async (req, res) => {
  try {
    const editedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(editedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
