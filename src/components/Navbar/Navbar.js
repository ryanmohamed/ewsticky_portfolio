import React from 'react';
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav className="Navbar">
      <Link to="/">home</Link> | {" "}
      <Link to="/me">me</Link> | {" "}
      <Link to="/projects">projects</Link> | {" "}
      <Link to="/experience">exp</Link> | {" "}
      <Link to="/contact">contact</Link>
    </nav>
  );
}

export default Navbar;
