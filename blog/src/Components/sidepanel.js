import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../styles.css";

export default function SidePanel () {

return(
  <Nav defaultActiveKey="/home" className="flex-column color-sidebar sidebar">
    <Nav.Link className="sidebar-link" href="/home">Home</Nav.Link>
    <Nav.Link className="sidebar-link" href="/sports">Sports</Nav.Link>
    <Nav.Link className="sidebar-link" href="/education">Education</Nav.Link>
    <Nav.Link className="sidebar-link" href="/gaming">Gaming</Nav.Link>
    <Nav.Link className="sidebar-link" href="/tvshows">TV Shows </Nav.Link>
  </Nav>
);
}