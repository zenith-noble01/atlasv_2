const router = require("express")();
const {
  createChat,
  getAllChats,
  commentChat,
} = require("../controllers/chatController");

router.post("/", createChat);
router.get("/", getAllChats);
router.put("/:chatId", commentChat);

module.exports = router;
