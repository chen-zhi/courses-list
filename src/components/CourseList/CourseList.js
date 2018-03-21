import React from "react";
import "./CourseList.css";

function CourseList(props) {
  const courses = props.courses.map(course => (
    <div className="courseItem" key={course.id}>
      <h3>{course.title}</h3>
      <div>{course.feed}</div>
    </div>
  ));
  return <div className="CourseList">{courses}</div>;
}

export default CourseList;
