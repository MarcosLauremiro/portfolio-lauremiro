const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  type: String,
  url: String
}, { _id: false });

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  imageUrl:[imageSchema],
  status: String,
  link: String,
  likes: {
    type: Number,
    default: 0 // Iniciar com 0 likes
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model('Post', postSchema);
