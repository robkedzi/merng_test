const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  author: String,
  content: String,
});

const Post = mongoose.model("Post", postSchema);

module.exports = {
  Post,
};
