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

async function createPost(title, content, user) {
  const p = new Post({
    title,
    content,
    user,
  });
  const result = await p.save();
  console.log(result);
}

//createUser('deep2','deep@gmail.com');

//createPost('New Post','Lorem Ipusm','647822e20cb62db23fc46175');

async function listPosts() { 
  const posts = await Post
    .find()
    .select('title user')
    .populate('user','name -_id');
  console.log(posts);
}
listPosts();

