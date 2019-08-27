const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const postSchema = new Schema({
    post_title: { type: String, required: true },
    post_desc: { type: String, required: true },
    post_url: { type: String, required: true },
    post_label: { type: String, required: true },

}, {
    timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;