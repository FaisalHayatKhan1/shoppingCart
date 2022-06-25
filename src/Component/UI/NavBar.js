import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AddToCart from "../user/AddToCart";
const NavBarComp = () => {
  const navigate=useNavigate();
  let isLogged=false;
 const logVal= localStorage.getItem("users");
 if (logVal!==null) {
  isLogged=true;
 }
 const onLogOutHandler=()=>{
  localStorage.removeItem('users')
  navigate('/')
 }
  return (
    <header>
      <nav className="navbar navbar-expand-lg  navbar-light bg-light p-3">
        <div className="container-fluid">
          <NavLink className="navbar-brand fs-1" to="/">
            Home
          </NavLink>
          <div className="collapse navbar-collapse justify-content-end pe-5">
            <ul className="navbar-nav">
              { !isLogged &&(
                <li className="nav-item">
                  <NavLink className="nav-link fs-2 mx-2" to="/sign-in">
                    Login
                  </NavLink>
                </li>
              )}
              {  !isLogged &&(
                <li className="nav-item">
                  <NavLink className="nav-link fs-2 mx-2" to="/sign-up">
                    SignUp
                  </NavLink>
                </li>
              )}

              { isLogged && (
                <li className="nav-item">
                  <NavLink className="nav-link fs-2 mx-2" to="/Home">
                    Home
                  </NavLink>
                </li>
              )}
              { isLogged &&(
                <li className="nav-item">
                  <button onClick={onLogOutHandler} className=" text-white nav-link fs-2 mx-2">Logout</button>
                </li>
              )}
              {isLogged &&(
                <li className="nav-item mx-2">
                  <AddToCart />
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBarComp;
