const express = require("express");
const { createPost, likeAndunlikePost, deletePost, getPostOfFollowing, updateCaption } = require("../controllers/post");
const { isAuthenticated } = require("../middlewares/auth");


const router = express.Router();

router.route("/post/upload").post(isAuthenticated,createPost)
router.route("/post/:postId").get(isAuthenticated,likeAndunlikePost).put(isAuthenticated,updateCaption).delete(isAuthenticated,deletePost)
router.route("/post").get(isAuthenticated,getPostOfFollowing)

//commentOnPost,deletePost *pending*

module.exports = router;