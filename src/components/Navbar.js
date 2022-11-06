import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [status, setStatus] = useState();

  useEffect(() => {
    localStorage.getItem("login") ? setStatus(true) : setStatus(false);
  });

  const logOut = () => {
    localStorage.setItem("login", false);
    alert("User Logged Out");
    window.location.href = "/";
  };

  return (
    <>
      <nav>
        <div id="nav_Left">
          <div id="logoContainer">
            <img
              src="https://edu-web-fundamentals.web.app/static/media/logo.58169365.png"
              alt="Logo"
            />
            <span> Kafene </span>
          </div>
          <div id="Navbar_Navigation">
            <span id="navig1">
              <Link
                to="/orders"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Orders
              </Link>
            </span>
            <span id="navig2">
              <Link
                to="/products"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Products
              </Link>
            </span>
            <span id="navig3">
              <Link
                to="/users"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Users
              </Link>
            </span>
          </div>
        </div>
        <div id="logoutDiv" onClick={() => logOut()}>
          Logout
        </div>
      </nav>
    </>
  );
}

export default Navbar;
