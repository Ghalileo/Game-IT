const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  userId: {  },
  threadId: {  },
  comment: {   },
  date: { type: Date, default: Date.now}

});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
