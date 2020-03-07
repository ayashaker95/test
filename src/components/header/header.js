import React, {Component, useState} from "react";
import {Navbar, Nav} from "react-bootstrap";
import "./header.scss";
import logo from "../../assets/images/Argus-logo-WHITE.0313bca0.png";

const Header = (props) => {

    return (
        <div className={"navBar"}>
            <Navbar bg="light"
                    expand="lg"
                    fixed="top"
            >
                <Navbar.Brand href="#home"
                              className={"navBar__Logo"}
                >
                    <img
                        className={"logo"}
                        src={logo}>
                    </img>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                >
                    <Nav
                        className="mr-auto"
                    >
                        <Nav.Link
                            className={"navBar__Element"}
                            href="#home">
                            Argus Live
                        </Nav.Link>
                        <Nav.Link
                            className={"navBar__Element"}
                            href="#link">
                            Timeline Tracker
                        </Nav.Link>
                        <Nav.Link
                            className={"navBar__Element"}
                            href="#link">
                            Lesson Library
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div
                className={"navBar__SubNav"}>
                <div className={"subNav__createNew"}>
                    <a>
                        <i className="fa fa-plus"></i>
                        Create New
                    </a>
                </div>
                <a
                    className={"subNav__Tabs"}>
                    Boards
                </a>
                <a className={"subNav__Tabs"}>
                    Batch Archive
                </a>
            </div>

        </div>
    );

}

export default Header;
