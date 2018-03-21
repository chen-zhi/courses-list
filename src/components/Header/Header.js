import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>Course List</h1>
        <input placeholder="Search" onChange={(event) => this.props.coursesSearch(event.target.value)}/>
      </div>
    );
  }
}

export default Header;
