import React, { useState } from "react";

const CourseHeader = () => {
  const [text, setText] = useState("");

  const handleSearch = () => {
    console.log(text);
  };

  return (
    <div className="courses__header">
      <input
        type="text"
        placeholder="Search for courses"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSearch}>Find Courses</button>
    </div>
  );
};

export default CourseHeader;
