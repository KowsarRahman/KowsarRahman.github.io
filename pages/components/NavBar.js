import React, { Component } from "react";
import { Avatar } from "@mui/material";
import Link from 'next/link'
import { Navbar, Nav, Container } from "react-bootstrap";
import { deepOrange, deepPurple } from '@mui/material/colors';

class NavBar extends Component {


    render() {

        return(
        <>
        {/* <nav className="navbar navbar-expand-lg navbar-dark">
        <Avatar sx={{ bgcolor: deepPurple[500] }}>KR</Avatar>&nbsp;<Link className="navbar-brand" href="/">Kowsar Rahman</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <Link className="nav-item nav-link active" href="#">Home</Link>
        </div>
        </div>
        </nav> */}
        <Navbar bg="dark" variant="dark">
    <Container>
    <Avatar sx={{ bgcolor: deepPurple[500] }} className="align-top">KR</Avatar>
    <Navbar.Brand href="/">Kowsar Rahman</Navbar.Brand>
    <Nav className="me-auto">
    </Nav>
    </Container>
  </Navbar>
        </>
        );
    }
}

export default NavBar;