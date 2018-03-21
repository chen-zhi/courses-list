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
  }
  render() {
    return (
      <div className="App">
        <Header />
        <CourseList courses={this.state.courses} />
      </div>
    );
  }
}

export default App;
