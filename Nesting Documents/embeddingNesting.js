const mongoose = require("mongoose");
const User = require("./userModel");
const Post = require("./postModel");
const express = require('express');
const app = express();


mongoose
  .connect(
    "mongodb+srv://Dhruv:Dk22042003@democluster.pjoqhjo.mongodb.net/dbpractice?retryWrites=true&w=majority"
  )
  .then(
    console.log("Server started"),
    app.listen(3004, () => {
      console.log(`Server started @ port 3004`);
    })
  )
  .catch((err) => {
    console.log(err.message);
  });

  async function createUser(name, email) {
    const u = new User({
      name,
      email,
    });
  
    const x = await u.save();
    console.log(x);
  }
  //createUser('Dhruv','dhruv@gmail.com');

  async function createPost(title, content, u) {
    const p = new Post({
      title,
      content,
      user:u,
    });
    const result = await p.save();
    console.log(result);
}
  //createPost('Second Post','Lorem Ipusm','6478340a9dce1fbb59076128');
  

  async function listPosts() { 
    const posts = await Post
      .find()
      .select('title user')
      .populate('user','name email -_id');
    console.log(posts);
  }
  listPosts();



  async function deleteAllPosts() {
    try {
      const result = await Post.deleteMany();
      console.log(`${result.deletedCount} posts deleted successfully.`);
    } catch (error) {
      console.error('Error deleting posts:', error);
    }
  }
  //deleteAllPosts();

  async function deleteAllUsers() {
    try {
      const result = await User.deleteMany();
      console.log(`${result.deletedCount} users deleted successfully.`);
    } catch (error) {
      console.error('Error deleting users:', error);
    }
  }
  //deleteAllUsers();