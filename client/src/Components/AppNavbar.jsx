import React, {useState} from 'react';
import { FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import {Link} from "react-router-dom";
import {FiShoppingCart} from "react-icons/fi";
import {IoCreate} from "react-icons/io5";
//import  './assets/css/style.css'



const AppNavbar = () => {


    return (
        <div className="sidebar">
            <div className="brand">
                <span className="sidebar-header"><i className="bi bi-c-circle-fill"> CRUD Food</i></span>
            </div>
            <ul className="sidebar-menu">
                <h6 style={{ textAlign: 'left' }} className="mt-5">MENU</h6>

                <Link className="btn btn-sm menu-items" to={"/create"}><IoCreate /> Create Food</Link><br/>
                <Link className="btn btn-sm menu-items" to={"/"}><FiShoppingCart />  All Food</Link>


            </ul>
        </div>
    );
};

export default AppNavbar;