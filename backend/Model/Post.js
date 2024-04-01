const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    caption: {
        type: String,
        required: true
    },
    imageUrl: {
        public_id:String,
        url:String,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    likes: [
        {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
        }
    ],  
    comments: [
        {
            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            comment:{
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now()
            }
        }
    ],  


});

module.exports = mongoose.model('Post', postSchema);