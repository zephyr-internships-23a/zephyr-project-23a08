const express = require("express");
const { createPost, likeAndunlikePost, deletePost } = require("../controllers/post");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();

router.route("/post/upload").post(isAuthenticated,createPost)
router.route("/post/:postId").get(isAuthenticated,likeAndunlikePost).delete(isAuthenticated,deletePost)

module.exports = router;