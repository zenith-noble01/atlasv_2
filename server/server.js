const dotenv = require("dotenv");
dotenv.config({
  path: "./config/config.env",
});
const connectDB = require("./config/db");
const cors = require("cors");
const express = require("express");
const app = express();
const morgan = require("morgan");

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

connectDB();

app.use("/api/question", require("./routes/questionRoute"));
app.use("/api/auth", require("./routes/authStudent"));
app.use("/api/studentNote", require("./routes/studentNotes"));
app.use("/api/progress", require("./routes/progress"));
app.use("/api/course", require("./routes/courseRoute"));
app.use("/api/chat", require("./routes/chat"));

app.listen(PORT, () => console.log(`server is on ${PORT}`));
