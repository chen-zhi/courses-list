import React, { Component } from "react";
import "./CourseList.css";

class CourseList extends Component {
  render() {
    const courses = this.props.courses.map(course => (
      <div className="courseItem" key={course.id}>
        <h3>{course.title}</h3>
        <div>{course.feed}</div>
      </div>
    ));
    return <div className="CourseList">{courses}</div>;
  }
}

export default CourseList;
