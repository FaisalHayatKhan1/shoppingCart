import React, { Fragment } from "react";
import NavBarComp from "./NavBar";
const Layout = (props) => {
  return (
    <Fragment>
      <header>
        <NavBarComp />
      </header>
      {props.children}
    </Fragment>
  );
};

export default Layout;
