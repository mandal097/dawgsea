const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        default: 'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cXVlc3Rpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    // likes: {
    //     type: Array,
    //     default: [],
    // },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    comments: [{
        text: String,
        commentedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

const Post = new mongoose.model('Post', postSchema);

module.exports = Post;