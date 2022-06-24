import React from "react";
import { useSelector } from "react-redux/es/exports";
import { NavLink } from "react-router-dom";
const NavBarComp = () => {
  const selecter=useSelector(state=>state.toogle.valueToogle)
  const formData=useSelector(state=>state.toogle.formVal)
  console.log(formData);

  return (
    <header>
      <nav className="navbar navbar-expand-lg  navbar-light bg-light p-3">
        <div className="container-fluid">
          <NavLink className="navbar-brand fs-1" to="/">
            Home
          </NavLink>
          <div className="collapse navbar-collapse justify-content-end pe-5">
            <ul className="navbar-nav">
            {!selecter &&               <li className="nav-item">
                <NavLink className="nav-link fs-2 mx-2" to="/sign-in">
                  Login
                </NavLink>
              </li> }
              {!selecter && 
              <li className="nav-item">
                <NavLink className="nav-link fs-2 mx-2" to="/sign-up">
                  SignUp
                </NavLink>
              </li>}

              {selecter && 
              <li className="nav-item">
                <NavLink className="nav-link fs-2 mx-2" to="/Home">
                  Home
                </NavLink>
              </li>}
              {selecter && 
              <li className="nav-item">
                <NavLink className="nav-link fs-2 mx-2" to="/sign-in">
                  Logout
                </NavLink>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBarComp;
