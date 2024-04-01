const Post = require('../Model/Post');
const User = require('../Model/User');

exports.createPost = async (req, res, next) => {
    try {
        const newPostData = {
            caption: req.body.caption,
            owner: req.user._id,
            imageUrl: req.file
        };
        const post = await Post.create(newPostData);
        const user = await User.findById(req.user._id);
        user.posts.push(post._id);
        await user.save();
        res.status(201).json({
            sucess: true,
            message: 'Post created successfully',
            post: post
        });
    } catch (error) {
        res.status(500).json({ 
            sucess: false,
            message: error.message 
        });
    }
};

exports.deletePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.postId);
        if (!post) {
            return res.status(404).json({
                sucess: false,
                message: 'Post not found'
            });
        }
        if (post.owner.toString() !== req.user._id.toString()) {
            return res.status(401).json({
                sucess: false,
                message: 'You are not authorized to delete this post'
            });
        }
        await post.deleteOne();

        const user = await User.findById(req.user._id);
        const index = user.posts.indexOf(req.params.postId); 
        user.posts.splice(index, 1);
        await user.save();

        res.status(200).json({
            sucess: true,
            message: 'Post deleted successfully'
        });
    } catch (error) {
        res.status(500).json({ 
            sucess: false,
            message: error.message 
        });
    }
};

exports.likeAndunlikePost = async (req,res) =>{
    try {
        const post = await Post.findById(req.params.postId);

        if (!post) {
            return res.status(404).json({
                sucess: false,
                message: 'Post not found'
            });
        }

        if (post.likes.includes(req.user._id)) {
            const index = post.likes.indexOf(req.user._id);
            post.likes.splice(index, 1);
            await post.save();
            res.status(200).json({
                sucess: true,
                message: 'Post unliked successfully',
                post: post
            });
        } else {
            post.likes.push(req.user._id);
            await post.save();
            res.status(200).json({
                sucess: true,
                message: 'Post liked successfully',
                post: post
            });
        }

    } catch (error) {
        res.status(500).json({ 
            sucess: false,
            message: error.message 
        });
    }
}