import React from 'react';
import {Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Toolbar = () =>{
    return(
        <Nav className='justify-content-end'>
            <NavLink exact className="buttonNav" activeClassName='buttonNavActiv' to="/admin">Edit pages</NavLink>
        </Nav>
    )
};

export default Toolbar;