const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({
  coursename: {
    type: String,
    required: true,
  },
  by: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
  },
  videoUrl: {
    type: String,
  },
});

module.exports = mongoose.model("Courses", coursesSchema);
