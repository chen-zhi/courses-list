import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>Course List</h1>
        <input placeholder="Search"/>
      </div>
    );
  }
}

export default Header;
