import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import { AuthContext } from "../../context/AuthContext";
import { FacebookButton } from "react-social";

function Nav() {
    const {
        state: { user }, dispatch
    } = useContext(AuthContext);

    function logOut() {
        dispatch({
            type: "LOG_OUT"
        })

    }
    return (

        <nav className="Navbar">
            <div className="h1-logo">
                <h1>
                    <Link to="/">Yummilious!</Link>
                </h1>
            </div>
            <div className="right-side-nav">
                <ul>
                    <li>
                        {user ? (<img id="shareImage" src={"http://localhost:3001/" + user.userImage} alt={"userPicture"} />) : (<img id="shareImage" src={"/images/usericon.png"} alt={"userPicture"} />)}
                    </li>
                    <li>
                        {user ? (
                            <NavLink activeClassName="selected" to="/">
                                {user.email}
                            </NavLink>
                        ) : (
                            <NavLink activeClassName="selected" to="/signup">
                                Sign up
                            </NavLink>
                        )}
                    </li>
                    <li>
                        <FacebookButton url={"https://yummilicious.cooking "} appId={"510487530062213"}>
                            <img id="shareImage" src={"/images/facebook.png"} alt={"share"} /></FacebookButton>
                    </li>
                    <li>
                        {user ? (
                            <NavLink
                                activeStyle={{ borderBottom: "1px solid white" }}
                                to="/login"
                                onClick={logOut}
                            >
                                Logout
                            </NavLink>
                        ) : (
                            <NavLink
                                activeStyle={{ borderBottom: "1px solid white" }}
                                to="/login"
                            >
                                Login
                            </NavLink>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
}


export default Nav;
