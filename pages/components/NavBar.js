import React, { Component } from "react";
import { Avatar } from "@mui/material";
import { deepOrange, deepPurple } from '@mui/material/colors';

class NavBar extends Component {


    render() {

        return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Avatar sx={{ bgcolor: deepPurple[500] }}>KR</Avatar>&nbsp;<a className="navbar-brand" href="/">Kowsar Rahman</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <a className="nav-item nav-link active" href="#">Home</a>
        </div>
        </div>
        </nav>
        </>
        );
    }
}

export default NavBar;