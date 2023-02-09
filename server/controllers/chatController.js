const Chat = require("../models/Chat");

module.exports.createChat = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text)
      return res.status(400).json({
        message: "this field is required",
      });

    const newChat = await Chat.create(req.body);
    res.status(201).json(newChat);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.getAllChats = async (req, res) => {
  try {
    const chat = await Chat.find();
    res.status(201).json(chat);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.commentChat = async (req, res) => {
  try {
    const { chatId } = req.params;
    console.log(req.body);
    const chatDev = await Chat.findById(chatId);
    if (!chatDev) {
      return res.status(404).json({
        message: "chat not found",
      });
    }
    chatDev.comment.push(req.body);
    await chatDev.save();
    res.status(200).json(chatDev);
    // const
    const chat = await Chat.find();
    res.status(201).json(chatDev);
  } catch (error) {
    console.log(error.message);
  }
};
