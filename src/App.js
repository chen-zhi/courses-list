import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CourseList from "./components/CourseList/CourseList";
import courses from "./db.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses,
      filtered: courses
    };

    this.coursesSearch = this.coursesSearch.bind(this);
  }

  coursesSearch(keywords) {
    const filtered = this.state.courses.filter(function(item) {
      return item.title.toLowerCase().includes(keywords.toLowerCase());
    });

    this.setState({ filtered });
  }

  render() {
    return (
      <div className="App">
        <Header coursesSearch={this.coursesSearch} />
        <CourseList courses={this.state.filtered} />
      </div>
    );
  }
}

export default App;
