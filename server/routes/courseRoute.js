const {
  createCourse,
  getAllCourse,
  getCourseID,
} = require("../controllers/courseController");

const router = require("express").Router();

router.post("/", createCourse);
router.get("/", getAllCourse);
router.get("/:courseId", getCourseID);

module.exports = router;
