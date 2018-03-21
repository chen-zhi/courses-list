import React from "react";

function Header(props) {
  return (
    <div className="Header">
      <h1>Course List</h1>
      <input
        placeholder="Search"
        onChange={event => props.coursesSearch(event.target.value)}
      />
    </div>
  );
}

export default Header;
