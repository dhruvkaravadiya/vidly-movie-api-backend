const mongoose = require('mongoose');

const postSchema = new Schema({
  title: String,
  content: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
