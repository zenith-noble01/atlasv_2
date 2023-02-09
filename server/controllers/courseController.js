const Courses = require("../models/Courses");

//creating newQuestions
module.exports.createCourse = async (req, res) => {
  try {
    const newQuestion = await Courses.create(req.body);
    // console.log(req.body);
    res.status(201).json(newQuestion);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.getAllCourse = async (req, res) => {
  try {
    const allQuestions = await Courses.find();
    res.status(200).json(allQuestions);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.getCourseID = async (req, res) => {
  try {
    const { courseId } = req.params;

    const course = await Courses.findById(courseId);
    if (course) {
      return res.status(200).json(course);
    } else {
      res.status(404).json("course not found");
    }
  } catch (error) {
    console.log(error.message);
  }
};
