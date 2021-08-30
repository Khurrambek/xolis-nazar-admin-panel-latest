import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="logo">
                <Link to="/" className="btn"><img src="assets/navigation/Logo.png" alt="" /></Link>
            </div>
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink exact to="/" className="nav-link" activeClassName={'active active-item'}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/sections" className="nav-link" activeClassName={"active active-item"}>Sections</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/adverts" className="nav-link" activeClassName={"active active-item"}>Adverts</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/addcategory" className="nav-link" activeClassName={"active active-item"}>Add Category</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/accounts" className="nav-link" activeClassName={"active active-item"}>Accounts</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navigation
