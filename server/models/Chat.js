const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  comment: [
    {
      userId: {
        type: String,
      },
      comment: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("Chats", chatSchema);
